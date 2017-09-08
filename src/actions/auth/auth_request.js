import ActionTypes from '../../constants/auth_action_types';
import firebase from '../firebase';
import { authRole } from './auth_role';
import { authEnd } from './auth_end';

export const authRequest = (username, password) => {
    return dispatch => {
        dispatch(authRequestRequested());
        return firebase.auth().signInWithEmailAndPassword(username, password)
            .then( user => {
                dispatch(authRequestFulfilled());
                dispatch(authRole(user));
            }, error => {
                console.error(error);
                dispatch(authRequestRejected(error.code));
                dispatch(authEnd(null));
            });
    }
}

const authRequestRequested = () => {
  return {
    type: ActionTypes.AuthRequestRequested
  }
}

const authRequestRejected = (code) => {
  return {
    type: ActionTypes.AuthRequestRejected,
    code
  }
}

const authRequestFulfilled = () => {
  return {
    type: ActionTypes.AuthRequestFulfilled  
    }
}