import ActionTypes from '../constants/action_types';
import AuthActionTypes from '../constants/auth_action_types';

const initialState = {
    inProgress: true
}

export const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        /**
         * Log in events
         */
        case AuthActionTypes.AuthRequestRequested: {
            return Object.assign({}, state, {
                inProgress: true,
            });
        }
        case AuthActionTypes.AuthRequestRejected: {
            let error = 'Somethign went wrong please try again later';
            if( action.code.indexOf('auth') !== -1) {
                error = 'Invalid user or password';
            }
            return Object.assign({}, state, {
                error
            });
        }
        case AuthActionTypes.AuthRequestFulfilled: {
            return Object.assign({}, state, {
                success: 'Authentication Success',
            });
        }
        /**
         * Log out events
         */
        case ActionTypes.LogOutRequested: {
            return Object.assign({}, state, {
                inProgress: true,
            });
        }
        case ActionTypes.LogOutRejected: {
            return Object.assign({}, state, {
                inProgress: false,
                error: 'Error in log out request'
            });
        }
        case ActionTypes.LogOutFulfilled: {
            return Object.assign({}, state, {
                inProgress: false,
                success: 'Log out Success',
            });
        }
        /**
         * Manage user event changes on firebase
         */
        case AuthActionTypes.AuthStateChanged: {
            return Object.assign({}, state, {
                inProgress: true,
            });
        }
        /**
         *  Part of the authentication that gets the user role from database
         */
        case AuthActionTypes.Auth: {
            return state;
        } 
        case AuthActionTypes.GetRoleFulfilled: {
            return state;
        }
        /**
         *  End of authentication 
         */
        case AuthActionTypes.AuthEnd: {
            return Object.assign({}, state, {
                inProgress: false,
                user: action.user,
                role: action.role
            });
        }
        default:
            return state;
    }
} 