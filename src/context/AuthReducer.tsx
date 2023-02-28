import { AuthState } from './AuthContext';

type AuthAction =
    | {type: 'signIn'}
    | {type: 'favoriteIcon', payload: string}
    | {type: 'logout'}
    | {type: 'changeUsername', payload: string};

// genera estado nuevo
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet',
            };
        case 'favoriteIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined,
            };
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};
