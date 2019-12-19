import { combineEpics } from 'redux-observable';

import authEpics from './modules/auth/auth.epic';

export default combineEpics(authEpics);
