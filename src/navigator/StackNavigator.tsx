import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: {
        id: number,
        nombre: string,
        usuario: string,
        password: string,
        lugarDeTrabajo: string,
        numeroDeTelefono: {
            casa: number,
            celular: number
        }
    },
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {//headerStyle es una propiedad que se le pasa a la funcion Stack.Navigator para que se quite la sombra del header
                    elevation: 0,//elevation es una propiedad que se le pasa a la funcion headerStyle para que se quite la sombra del header en android
                    shadowColor: 'transparent',//shadowColor es una propiedad que se le pasa a la funcion headerStyle para que se quite la sombra del header en ios
                },
                cardStyle: {//cardStyle es una propiedad que se le pasa a la funcion Stack.Navigator para que se cambie el color de fondo de las pantallas
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name="Pagina1Screen" options={{ title: 'Página 1' }} component={Pagina1Screen} />
            {/* options es una propiedad que se le pasa a la funcion Stack.Screen para que se cambie el titulo de la pantalla */}
            <Stack.Screen name="Pagina2Screen" options={{ title: 'Página 2' }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: 'Página 3' }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
        </Stack.Navigator>
    );
};
