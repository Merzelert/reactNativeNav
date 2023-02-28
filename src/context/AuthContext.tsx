// Definir como luce y que informacion tendra el context

import React, { createContext } from 'react';

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

// Lo usaremos para decirle a React como luce y que expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

// Crear el contexto

export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado

export const AuthProvider = ({ children }: any) => {

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => {},
        }}>
            {children}
        </AuthContext.Provider>
    );
};
