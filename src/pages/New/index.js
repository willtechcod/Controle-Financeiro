import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert, Text } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/auth'
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Header from '../../components/Header';
import Picker from '../../components/Picker';

export default function New() {
    const navigation = useNavigation();

    const [tipo, setTipo] = useState('Selecione o tipo');
    const [valor, setValor] = useState('');
    const [nome, setNome] = useState('');

    const { user: usuario } = useContext(AuthContext);

    function handleSubmit() {
        Keyboard.dismiss();
        if (isNaN(parseFloat(valor)) || tipo === null) {
            alert('Preencha todos os campos!');
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo ${tipo} - ${parseFloat(valor)} - ${nome}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )

    }

    async function handleAdd() {
        let uid = usuario.uid;

        let key = await firebase.database().ref('historico').child(uid).push().key;
        await firebase.database().ref('historico').child(uid).child(key).set({
            tipo: tipo,
            valor: parseFloat(valor),
            nome: nome,
            date: format(new Date(), 'dd/MM/yyyy')
        })
        //Atulizar nosso saldo
        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then((snapshot) => {
            let saldo = parseFloat(snapshot.val().saldo);

            tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

            user.child('saldo').set(saldo);

        });
        Keyboard.dismiss();
        setValor('');
        setNome('');
        navigation.navigate('Home');

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header />
                <SafeAreaView style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 22, fontStyle: 'italic' }}>Entrada ou saída de insumos</Text>
                    <Input
                        style={{ color: '#000' }}
                        placeholder="R$ Valor recebido ou gasto"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        value={valor}
                        onChangeText={(text) => setValor(text)}
                    />

                    <Picker onChange={setTipo} tipo={tipo} />

                    <Input
                        style={{ color: '#000' }}
                        placeholder="Nome da despesa ou receita"
                        keyboardType=""
                        returnKeyType="next"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                    <SubmitButton onPress={handleSubmit}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    );
}