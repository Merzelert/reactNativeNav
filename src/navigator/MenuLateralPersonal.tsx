import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateralPersonal = () => {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: dimensions.width >= 768 ? false : true,// Oculta la hamburguesa
                // headerTitle: '',
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://www.w3schools.com/howto/img_avatar.png',
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                style={styles.menuBoton}
                onPress={() => navigation.navigate('Tabs')}
                >
                    <Text style={styles.menuTexto}>Navegacion Stack</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.menuBoton}
                onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuTexto}>Settings</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    );
};
