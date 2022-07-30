import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';


import { AuthContext } from '../../contexts/auth';

import {
    Backgroud,
    Container,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
} from './styles';

export default function SignUp() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSignUp() {
        signUp(name, email, password);
    }

    return (
        <Backgroud >
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="E-mail"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassoword(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF' />
                        ) : (
                            <SubmitText>Cadastar</SubmitText>
                        )
                    }
                </SubmitButton>



            </Container>
        </Backgroud>
    );
}