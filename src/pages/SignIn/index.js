import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import {
    Backgroud,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from './styles';

export default function SignIn() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleLogin() {
        signIn(email, password);
    }

    return (
        <Backgroud >
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo source={require('../../assets/logoo.png')} />
                <AreaInput>
                    <Input
                        placeholder="E-mail"
                        autoCorrect={false}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassoword(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF' />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }

                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Ainda não tem uma conta? Cadastre-se</LinkText>
                </Link>
            </Container>
        </Backgroud>
    );
}