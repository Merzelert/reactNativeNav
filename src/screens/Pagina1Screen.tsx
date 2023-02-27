import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> { }//interface es una funcion que se le pasa un nombre y un tipo de dato, en este caso se le pasa el nombre Props y el tipo de dato StackScreenProps<any, any> que es un tipo de dato que se le pasa a la funcion Pagina1Screen

export const Pagina1Screen = ({ navigation }: Props) => {//navigation es una propiedad que se le pasa a la funcion Pagina1Screen
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>

            <Button
                title="Ir a página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}//onPress es una propiedad que se le pasa a la funcion Button para que al presionar el boton se ejecute la funcion y se navegue a la pagina 2
            />

            <Text>Navegar con argumentos</Text>
            <View style={{
                flexDirection: 'row',
                marginTop: 20,
            }}>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6',
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {//despues de la coma se le pasa un objeto con los argumentos que se le pasaran a la pagina Persona, en este caso se le pasa un objeto con el id y el nombre
                        id: 1,
                        nombre: 'Erik',
                        usuario: '3r1k',
                        password: '123456',
                        lugarDeTrabajo: 'Exagono',
                        numeroDeTelefono: {
                            casa: 1234567890,
                            celular: 987654321,
                        },
                    })}//onPress es una propiedad que se le pasa a la funcion TouchableOpacity para que al presionar el boton se ejecute la funcion y se navegue a la pagina Persona
                >
                    <Text style={styles.botonGrandeTexto}>
                        Persona 1
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427',
                    }}
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Ivan',
                        usuario: '1v4n',
                        password: '123456',
                        lugarDeTrabajo: 'Home',
                        numeroDeTelefono: {
                            casa: 1234567890,
                            celular: 987654321,
                        },
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>
                        Persona 2
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
