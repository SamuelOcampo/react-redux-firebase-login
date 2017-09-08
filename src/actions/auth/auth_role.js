import ActionTypes from '../../constants/auth_action_types';
import database from '../database';

import { authEnd } from './auth_end';

export const authRole = (user) => {
    return dispatch => {
        dispatch(authRoleRequested());
        return database.ref('/users/' + user.uid + '/role').once('value', snap => {
            const role = snap.val();
            dispatch(authRoleFulfilled());
            dispatch(authEnd(user, role));
        })
            .catch((error) => {
                console.error(error);
                dispatch(authRoleRejected());
                dispatch(authEnd(null));
            });
    }
}


const authRoleRequested = () => {
    return {
        type: ActionTypes.AuthRoleRequested
    };
}

const authRoleRejected = () => {
    return {
        type: ActionTypes.AuthRoleRejected
    }
}

const authRoleFulfilled = () => {
    return {
        type: ActionTypes.AuthRoleFulfilled,
    };
}