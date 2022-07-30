import React from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Tipo,
    IconView,
    Icon,
    TipoText,
    ValorText,
    TipoTextName
} from './styles';

export default function HistoricoList({ data, deleteItem }) {
    return (
        <Container onLongPress={() => deleteItem(data)}>
            <Tipo>
                <IconView tipo={data.tipo}>
                    <Icon source={data.tipo === 'despesa' ? require('../../assets/baixo.png') : require('../../assets/cima.png')} />
                    <TipoText>{data.tipo}</TipoText>
                </IconView>
                <TipoTextName>{data.nome}</TipoTextName>
                <TipoTextName>{data.date}</TipoTextName>
            </Tipo>

            <ValorText>R$ {data.valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</ValorText>
        </Container>
    );
}