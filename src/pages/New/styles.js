import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
    height: 40px;
    width: 90%;
    border-radius: 7px;
    background-color: rgba(255,255,255,0.9);
    margin-top: 30px;
    font-size: 17px;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 40px;
    width: 90%;
    background-color: #00b94a;
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

