import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;

export const Container = styled.View`
    margin-left: 15px;
    margin-bottom: 25px;
`;

export const Nome = styled.Text`
    font-size: 24px;
    color: #808080;
    font-style: italic;
`;

export const Saldo = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;

export const Title = styled.Text`
    color: #00b94a;
    margin-bottom: 15px;
    font-size: 16px;
    font-style: italic;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top:15px;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const AreaLogo = styled.View`
    flex-direction: row;
    margin-left:18px;
    align-items: baseline;
`;

export const ButtonLogo = styled.TouchableOpacity`
    width:50px;
    height:50px;
`;

export const Logo = styled.Image`
    width:30px;
    height: 30px;
    margin-bottom: 15px;
`;

