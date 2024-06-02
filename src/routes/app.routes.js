import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import CadastrarEditar from '../pages/CadastrarEditar';

const AppStack = createNativeStackNavigator();

export default function AppRoutes() {
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="Home" 
                component={Home} 
                options={{headerShown: false}} />

            <AppStack.Screen 
                name="CadastrarEditar" 
                component={CadastrarEditar} 
                options={{headerShown: false}}
            />
        </AppStack.Navigator>
    );
}