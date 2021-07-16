import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import React from 'react';
import { StatusBar } from 'react-native';

import Home from './screens/home/index'
import Login from './screens/login/index'
import Cadastro from './screens/cadastro/index'

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#000" />

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
