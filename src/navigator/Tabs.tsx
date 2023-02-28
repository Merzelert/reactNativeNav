import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
// import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import { TopTapNavigator } from './TopTapNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

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
                            iconName = 'card-outline';
                            break;
                        case 'Tab2Screen':
                            iconName = 'headset-outline';
                            break;
                        case 'StackNavigator':
                            iconName = 'qr-code';
                            break;
                    }
                    return <Icon name={iconName} size={25} color={color} />;
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
                component={TopTapNavigator}
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
