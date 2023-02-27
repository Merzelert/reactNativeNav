import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../themes/appTheme';

export const Pagina2Screen = () => {

    const navigator = useNavigation<any>();//useNavigation es un hook que se le pasa un tipo de dato, en este caso se le pasa el tipo de dato any

    useEffect(() => {
        navigator.setOptions({
            title: 'Nueva página',
            headerBackTitle: '',
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);//si no le mandamos ningun argumento, se ejecutara solo una vez

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina2Screen
            </Text>

            <Button
                title="Ir a página 3"
                onPress={() => navigator.navigate('Pagina3Screen')}//onPress es una propiedad que se le pasa a la funcion Button para que al presionar el boton se ejecute la funcion y se navegue a la pagina 3
            />

        </View>
    );
};
