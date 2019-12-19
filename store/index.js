import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './reducers';

const logger = createLogger({
  collapsed: true,
});

const makeConfiguredStore = (reducer, initialState) =>
  createStore(reducer, initialState, applyMiddleware(logger));

export const makeStore = (initialState, { isServer, req, debug, storeKey }) => {
  if (isServer) return makeConfiguredStore(reducers, initialState);

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['account'],
    storage,
  };

  const persistedreducer = persistReducer(persistConfig, reducers);
  const store = makeConfiguredStore(persistedreducer, initialState);

  store.__persistor = persistStore(store);

  return store;
};

export const setClientState = clientState => ({
  type: SET_CLIENT_STATE,
  payload: clientState,
});
