import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#5856D6',
};

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    textoJSON: {
        fontSize: 20,
        marginBottom: 10,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderColor: 'black',
        borderWidth: 2,
        right: -70,
    },
    botonGrandeTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 20,
        marginHorizontal: 40,
    },
    menuBoton: {
        flexDirection: 'row',
        alignItems: 'center',
        //separa entre items
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    menuTexto: {
        fontSize: 20,
    },
});

