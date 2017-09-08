const authActionTypes = {
    AuthStateChanged: 'AUTH_STATE_CHANGED',

    AuthRequestRequested: 'AUTH_REQUESTED',
    AuthRequestFulfilled: 'AUTH_FULFILLED',
    AuthRequestRejected: 'AUTH_REJECTED',

    AuthRoleRequested: 'AUTH_ROLE_REQUESTED',
    AuthRoleFulfilled: 'AUTH_ROLE_FULFILLED',
    AuthRoleRejected: 'AUTH_ROLE_REJECTED',

    AuthEnd: 'AUTH_END',
}

export default authActionTypes;
