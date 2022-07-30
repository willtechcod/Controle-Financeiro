import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    margin-bottom: 5px;
    padding: 10px;
    box-shadow: 2px 2px rgba(0,0,0,0.40);
    background-color: rgba(0,0,0,0.07);
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
`;
export const TipoTextName = styled.Text`
    color: #000;
    font-size: 16px;
    font-style: italic;
    margin-left: 10px;
    font-weight: bold;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#E74C3C' : '#049301'};
    padding-bottom: 3px;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 7px;
`;

export const Icon = styled.Image`
    width: 22px;
    height: 22px;
    justify-content: center;
    align-items: center;

`;

export const ValorText = styled.Text`
    color: #222;
    font-size: 22px;
    font-weight: bold;
`;