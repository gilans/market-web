import { Action } from 'rxjs/internal/scheduler/Action';

export const LOGIN = 'LOGIN';
const initialState = {
  user: { name: 'gilberto', lastName: 'suarez' },
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        fromClient: payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default reducer;
