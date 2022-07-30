import styled from "styled-components/native";

export const Backgroud = styled.SafeAreaView`
    flex: 1;
    background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 15px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
    background-color: rgba(0,0,0,0.20);
    width: 90%;
    font-size: 17px;
    color: #FFF;
    margin-bottom: 15px;
    border-radius: 8px;
    text-transform: lowercase;
    padding-left: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 6px;
`;
export const SubmitText = styled.Text`
    font-size: 18px;
    text-transform: uppercase;
    color: #FFF;
    font-weight: bold;
`;
export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 10px;
`;
export const LinkText = styled.Text`
    color: #FFF;
    margin-top: 20px;
`;


