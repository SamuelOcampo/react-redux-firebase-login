import { combineReducers } from 'redux';
import { authReducer } from './auth_reducer';

const rootReducer = combineReducers({
  authentication: authReducer
});

export default rootReducer;
