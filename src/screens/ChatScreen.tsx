import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme';

export const ChatScreen = () => {

    const { authState, logout } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Chat Screen</Text>

            {/* Si el usuario está logueado o tiene un icono favorito, muestra el menú de logout y el icono favorito */}
            {
                (authState.isLoggedIn || authState.favoriteIcon) &&
                <View>
                    <View style={styles.menuBoton}>
                        <Text style={styles.menuTexto}>Hola {authState.username}</Text>
                        <Icon name={authState.favoriteIcon!} size={30} color="#5856D6" />
                    </View>
                    <Button
                        title="Logout"
                        onPress={() => logout()} />
                </View>
            }


        </View>
    );
};
