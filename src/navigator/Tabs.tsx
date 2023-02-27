import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: 'red',
                    borderTopWidth: 0,
                    elevation: 0,
                    backgroundColor: 'black',
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                },
                headerTitleAlign: 'left',
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'ST';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>;
                },
            })
            }
        >
            <Tab.Screen
                name="Tab1Screen"
                options={{ title: 'Tab 1', headerShown: false }}
                component={Tab1Screen}
            />
            <Tab.Screen
                name="Tab2Screen"
                // options={{ tabBarIcon: () => null }}
                options={{ title: 'Tab 2', headerShown: false }}
                component={Tab2Screen}
            />
            <Tab.Screen
                name="StackNavigator"
                options={{ title: 'Stack', headerShown: false }}
                component={StackNavigator}
            // options={{ tabBarIcon: () => null }}
            />
        </Tab.Navigator>
    );
};
