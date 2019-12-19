import Immutable from 'immutable';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const initialState = Immutable.fromJS({
  user: { name: '', lastName: '', email: '' },

  loginError: null,
  loginFetching: false,
  loginFetched: false,
});

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password },
});
export const loginSuccess = ({ data, meta }) => ({
  type: LOGIN_SUCCESS,
  payload: { data, meta },
});
export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return state
        .set('loginFetching', true)
        .set('loginError', null)
        .set('loginFetched', false);
    }
    case LOGIN_SUCCESS: {
      const { data } = action.payload;
      console.log('data=', data);
      return state
        .set('loginFetching', false)
        .set('loginError', null)
        .set('loginFetched', true);
    }
    /* case LOGIN_FAILURE: {
      const { error } = action.payload;

      return state
        .set('loginError', error.status)
        .set('loginFetching', false)
        .set('loginFetched', true);
    } */
    default: {
      return state;
    }
  }
};
export default reducer;
