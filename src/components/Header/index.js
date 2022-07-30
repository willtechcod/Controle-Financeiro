import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonMenu, Icon } from './styles'

export default function Header() {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer()}>
                <Icon source={require('../../assets/branco.png')} />
            </ButtonMenu>
        </Container>
    );
}