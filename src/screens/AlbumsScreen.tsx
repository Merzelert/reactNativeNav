import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const AlbumsScreen = () => {

    const { authState } = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Fav Icon</Text>
            {
                authState.favoriteIcon &&
                <Icon
                    name={authState.favoriteIcon}
                    size={150}
                    color="#5856D6"
                />
            }
        </View>
    );
};
