import ActionTypes from '../constants/action_types';
import firebase from './firebase';

export const logOut = () => {
  return dispatch => {
    dispatch(logOutRequested());
    return firebase.auth().signOut()
      .then(() => {
        dispatch(logOutFulfilled());
      })
      .catch((error) => {
        console.error(error.message);
        dispatch(logOutRejected());
      });
  }
}

const provider = new firebase.auth.FacebookAuthProvider();

const logOutRequested = () => {
  return {
    type: ActionTypes.LogOutRequested
  }
}

const logOutRejected = () => {
  return {
    type: ActionTypes.LogOutRejected
  }
}

const logOutFulfilled = () => {
  return {
    type: ActionTypes.LogOutFulfilled  
    }
}