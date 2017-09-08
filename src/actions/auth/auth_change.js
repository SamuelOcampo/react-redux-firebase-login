import ActionTypes from '../../constants/auth_action_types';
import firebase from '../firebase';

import { authRole } from './auth_role';
import { authEnd } from './auth_end'; 


export const authChange = () => {
  return dispatch => {

    return firebase.auth().onAuthStateChanged( user => {
      dispatch(authStateChanged());
      if(user) {
        dispatch(authRole(user));
      } else {
        dispatch(authEnd(null))
      }
    });
  }
}

const authStateChanged = (user) => {
  return {
    type: ActionTypes.AuthStateChanged  
  }
}