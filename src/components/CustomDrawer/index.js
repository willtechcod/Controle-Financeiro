import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {

    const { user, signOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Image
                    source={require('../../assets/mine-logo.png')}
                    style={{ width: 115, height: 115 }}
                    resizeMode='contain'
                />

                <Text style={{ color: '#FFF', fontSize: 18, marginTop: 5, fontStyle: 'italic' }}>
                    Bem Vindo
                </Text>

                <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', paddingBottom: 25 }}>
                    {user && user.name}
                </Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                {...props}
                label="Sair"
                labelStyle={{ color: "#FFF" }}
                inactiveBackgroundColor='#c62c36'
                onPress={() => signOut()}
            />
        </DrawerContentScrollView>
    );
}