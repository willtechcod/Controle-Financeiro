import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#171717',
                },
                drawerLabelStyle: {
                    fontWeight: 'bold'
                },
                drawerActiveTintColor: '#FFF',
                drawerActiveBackgroundColor: '#00b94a',
                drawerInactiveBackgroundColor: '#000',
                drawerInactiveTintColor: '#ddd',
                drawerItemStyle: {
                    marginVertical: 5,
                }
            }}

        >
            <AppDrawer.Screen options={{ headerShown: false }} name='Home' component={Home} />
            <AppDrawer.Screen options={{ headerShown: false }} name='Registrar' component={New} />
            <AppDrawer.Screen options={{ headerShown: false }} name='Perfil' component={Profile} />
        </AppDrawer.Navigator>
    );
};

export default AppRoutes;