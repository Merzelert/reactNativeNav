import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../themes/appTheme';

export const SettingsScreen = () => {

    const {authState} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>SettingsScreen</Text>

            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {/* Si existe el icono favorito, lo muestra */}
            {
                authState.favoriteIcon && (
                    <Icon
                        name={authState.favoriteIcon}
                        size={150}
                        color={colors.primary}
                    />
                )
            }
        </View>
    );
};
