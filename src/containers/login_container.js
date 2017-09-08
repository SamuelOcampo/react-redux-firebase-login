
import { connect } from 'react-redux';
import { authRequest } from '../actions/auth/auth_request';
import Login from '../components/login';

function mapStateToProps(state) {
  return {
    authError: state.authentication.error,
    loading: state.authentication.inProgress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(authRequest(username, password)),
  };
}

const loginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default loginContainer;
