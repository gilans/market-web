import { combineReducers } from 'redux';

import authReducer from './modules/auth/auth.state';

const reducers = {
  auth: authReducer,
};

export default combineReducers(reducers);
