import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon iconName="earth-outline" />
                <TouchableIcon iconName="fast-food-outline" />
                <TouchableIcon iconName="headset-outline" />
                <TouchableIcon iconName="map-outline" />
                <TouchableIcon iconName="people" />
                <TouchableIcon iconName="qr-code" />
                <TouchableIcon iconName="leaf" />
                <TouchableIcon iconName="paw" />
            </Text>
        </View>

    );
};
