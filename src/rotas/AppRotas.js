import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Principal from '../Telas/Principal';
import Repositorios from '../Telas/Repositorios';

export default function AppRotas(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Principal' component={Principal}/>
            <Stack.Screen name='Repositorios' component={Repositorios}/>
        </Stack.Navigator>
    );
}