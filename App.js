import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
console.disableYellowBox = true;
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

export default function App() {
  return (

    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}