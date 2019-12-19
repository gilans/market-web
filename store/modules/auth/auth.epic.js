import { map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';

import { LOGIN, loginSuccess } from './auth.state';

export const loginEpic = (action$, state$) =>
  action$.pipe(
    ofType(LOGIN),
    map(() => loginSuccess({ data: 'RxJS' }))
  );

export default combineEpics(loginEpic);
