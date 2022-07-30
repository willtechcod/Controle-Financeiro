import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/firebaseConnection';
import { format, isBefore } from 'date-fns';
import { AuthContext } from '../../contexts/auth';
import { Alert, Platform } from 'react-native';
import {
    Background,
    Container,
    Nome,
    Saldo,
    Title,
    List,
    AreaLogo,
    Logo,
    ButtonLogo
} from './styles';
import Header from '../../components/Header';
import HistoricoList from '../../components/HistoricoList';
import DatePicker from '../../components/DatePicker';

export default function Home() {

    const { user } = useContext(AuthContext);
    const [historico, setHistorico] = useState([]);
    const [saldo, setSaldo] = useState(0);

    const uid = user && user.uid;
    const [newDate, setNewDate] = useState(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        async function loadList() {
            await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
                setSaldo(snapshot.val().saldo);
            });
            await firebase.database().ref('historico')
                .child(uid)
                .orderByChild('date').equalTo(format(newDate, 'dd/MM/yyyy'))
                .limitToLast(10).on('value', (snapshot) => {
                    setHistorico([]);

                    snapshot.forEach((childItem) => {
                        let list = {
                            key: childItem.key,
                            tipo: childItem.val().tipo,
                            valor: childItem.val().valor,
                            nome: childItem.val().nome,
                            date: childItem.val().date,
                        };
                        setHistorico(oldArray => [...oldArray, list].reverse());
                    })
                })
        }
        loadList();
    }, [newDate])

    function handleDelete(data) {

        //pegando data do item
        const [diaItem, mesItem, anoItem] = data.date.split('/');
        const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

        //pegando data de hoje
        const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
        const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
        const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);


        if (isBefore(dateItem, dateHoje)) {
            //se a  data do rgistro já passou entra aqui
            alert('Voçê não pode excluir um registro antigo!');
            return;
        }
        Alert.alert(
            'Cuidado Atenção!',
            `Voçê deseja excluir ${data.tipo} - do dia: ${data.date} - ${data.nome} ?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Deletar',
                    onPress: () => handleDeleteSuccess(data)
                }
            ]
        )
    }

    async function handleDeleteSuccess(data) {
        await firebase.database().ref('historico')
            .child(uid).child(data.key).remove()
            .then(async () => {
                let saldoAtual = saldo;
                data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);

                await firebase.database().ref('users').child(uid)
                    .child('saldo').set(saldoAtual);
            })
            .child((error) => {
                console.log(error)
            })
    }

    function handleShowPicker() {
        setShow(true)
    }

    function handleClose() {
        setShow(false)

    }

    const onChange = (date) => {
        setShow(Platform.OS === 'ios');
        setNewDate(date);
        console.log(date)
    }

    return (
        <Background >
            <Header />
            <Container>
                <Nome>{user && user.name}</Nome>
                <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo >
            </Container>

            <AreaLogo>
                <ButtonLogo onPress={handleShowPicker}>
                    <Logo source={require('../../assets/calendar.png')} />
                </ButtonLogo>
                <Title>Ultimas movimentações</Title>
            </AreaLogo>


            <List
                showsVerticalScrollIndicator={false}
                data={historico}
                keyExtrator={item => item.key}
                renderItem={({ item }) => (<HistoricoList data={item} deleteItem={handleDelete} />)}
            />
            {show && (
                <DatePicker
                    onClose={handleClose}
                    date={newDate}
                    onChange={onChange}
                />
            )}

        </Background>
    );
}