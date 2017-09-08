import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const logger = createLogger();

const store = createStore(rootReducer,
  {},
  applyMiddleware(
    thunkMiddleware, 
    logger
  )
);

export default store;
