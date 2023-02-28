// Definir como luce y que informacion tendra el context

import React, { createContext, useReducer } from 'react';
import { authReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial del context

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context, asi como los valores iniciales
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUsername: (username: string) => void;
}

// Crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {
    // useReducer recibe el reducer y el estado inicial y retorna el estado actual y el dispatch
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    // Definir los actions que se pueden ejecutar sobre el reducer
    const signIn = () => { //signIn es un action y dispatch es el reducer que se ejecuta cuando se llama a signIn (ver AuthReducer.tsx)
        dispatch({ type: 'signIn' });
    };

    const changeFavoriteIcon = (iconName: string) => { //changeFavoriteIcon es un action y dispatch es el reducer que se ejecuta cuando se llama a changeFavoriteIcon (ver AuthReducer.tsx)
        dispatch({ type: 'favoriteIcon', payload: iconName });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username });
    };

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
