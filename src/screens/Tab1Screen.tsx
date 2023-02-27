import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles, colors } from '../themes/appTheme';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Tab1Screen</Text>
            <Text>
                <Icon name="rocket" size={50} color={colors.primary} />
            </Text>
        </View>

    );
};
