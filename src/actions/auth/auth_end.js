import ActionTypes from '../../constants/auth_action_types';

export const authEnd = (user, role) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.AuthEnd,
            user,
            role
        })
    }
}