import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Immutable from 'immutable';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers';
import epics from './epics';

const logger = createLogger({
  collapsed: true,
  stateTransformer: state =>
    Object.keys(state).reduce((acc, key) => {
      const value = state[key];
      return { ...acc, [key]: Immutable.Map.isMap(value) ? value.toJS() : value };
    }, {}),
});

export default (initialState, { isServer, req, debug, storeKey }) => {
  const { NODE_ENV } = process.env;
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware];
  if (NODE_ENV === 'development') middleware.push(logger);
  const reduxMiddleware = applyMiddleware(...middleware);

  if (isServer) return createStore(reducers, Immutable.fromJS(initialState), reduxMiddleware);
  const persistConfig = {
    key: 'nextjs',
    whitelist: ['account'],
    storage,
  };

  const store = createStore(
    persistReducer(persistConfig, reducers),
    Immutable.fromJS(initialState),
    reduxMiddleware
  );

  store.__persistor = persistStore(store);

  epicMiddleware.run(epics);

  return store;
};
