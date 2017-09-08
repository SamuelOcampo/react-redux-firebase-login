import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';

import InviteContainer from './containers/invite_container';
import LoginContainer from './containers/login_container';
import registerServiceWorker from './registerServiceWorker';

import { authChange } from './actions/auth/auth_change';

import store from './store/store';

import firebase from './actions/firebase';

import './index.css';

const LoginOrApp = connect( 
  state => ({ user: state.authentication.user, role: state.authentication.role })
  )( ({ user, role, dispatch })  => {
    if(user === undefined || user === null) {
        dispatch(authChange()); //Enable listener for authentications
        return <LoginContainer />;
    } else if( user && role !== 'admin' ) {
        return <h1>You don't have access to be here</h1>
    } else if( user && role === 'admin' ) {
        return <InviteContainer />
    } else {
        return <h1>Something went wrong please try again later</h1>
    }
});

console.log(firebase.auth().currentUser);

const main = (
  <Provider store={store}>
    <LoginOrApp />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
