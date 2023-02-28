import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme';

export const SettingsScreen = () => {

    const {authState} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>SettingsScreen</Text>

            <Text>{JSON.stringify(authState, null, 4)}</Text>
        </View>
    );
};
