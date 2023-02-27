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
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <Icon name="earth-outline" size={80} color={colors.primary} />
                <Icon name="fast-food-outline" size={80} color={colors.primary} />
                <Icon name="headset-outline" size={80} color={colors.primary} />
                <Icon name="map-outline" size={80} color={colors.primary} />
                <Icon name="people" size={80} color={colors.primary} />
                <Icon name="qr-code" size={80} color={colors.primary} />
                <Icon name="leaf" size={80} color={colors.primary} />
                <Icon name="paw" size={80} color={colors.primary} />
            </Text>
        </View>

    );
};
