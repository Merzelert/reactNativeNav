/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Sending']); // Ignore log notification by message sending

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                tabBarActiveTintColor: colors.primary,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary,
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chats':
                            iconName = 'chatbubbles-outline';
                            break;

                        case 'Contact':
                            iconName = 'people-circle-outline';
                            break;

                        case 'Albums':
                            iconName = 'images-outline';
                            break;
                    }
                    return <Icon name={iconName} size={25} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Chats" component={ChatScreen} />
            <Tab.Screen name="Contact" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
};
