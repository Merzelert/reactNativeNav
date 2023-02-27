/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouteParams {
//     id: number;
//     nombre: string;
//     usuario: string;
//     password: string;
//     lugarDeTrabajo: string;
//     numeroDeTelefono: {
//         casa: number;
//         celular: number;
//     };
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ({route, navigation}:Props ) => {

    // const params = route.params as RouteParams;

    const params = route.params;//se crea una constante params que es igual a la propiedad params de la propiedad route que se le pasa a la funcion PersonaScreen y se le pasa el tipo de dato RouteParams

    useEffect(() => {
        navigation.setOptions({
            title: params.usuario,
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.textoJSON}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    );
};

    //console.log(JSON.stringify(props, null, 3));//JSON.stringify convierte un objeto a un string, en este caso se le pasa el objeto props, null y 3, null es para que no se le pase ningun argumento y 3 es para que se le pase un espacio de 3 en 3
