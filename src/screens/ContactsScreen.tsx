import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../themes/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

    const {signIn, authState} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>
            {/* If the user is logged in, show the text "Authenticated", otherwise show the button "SignIn" */}
            {
                (authState.isLoggedIn) ?
                <Text style={styles.menuTexto}>Authenticated</Text>
                :
                <Button
                title="SignIn"
                onPress={signIn}
            />
            }

        </View>
    );
};
