import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralPersonal } from './src/navigator/MenuLateralPersonal';

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator/> */}
            {/* <MenuLateral/> */}
            <MenuLateralPersonal/>
        </NavigationContainer>
    );
};

export default App;
