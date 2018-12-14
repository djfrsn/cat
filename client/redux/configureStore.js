import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default function configureStore(preloaded_state, additionalMiddleware) {
  let middleware = [thunkMiddleware];

  if (additionalMiddleware) {
    middleware = [...middleware, ...additionalMiddleware];
  }

  return createStore(
    rootReducer,
    preloaded_state,
    applyMiddleware(...middleware)
  );
}
