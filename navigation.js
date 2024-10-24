import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../paginas/LoginScreen';
import CadastroScreen from '../paginas/CadastroScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Cadastro' component={CadastroScreen} />
        </Stack.Navigator>
    );
}
