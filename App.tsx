import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralPersonal } from './src/navigator/MenuLateralPersonal';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                {/* <StackNavigator/> */}
                {/* <MenuLateral/> */}
                <MenuLateralPersonal />
            </AppState>
        </NavigationContainer>
    );
};

const AppState = ({ children }: any) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export default App;

