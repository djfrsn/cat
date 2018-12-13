import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(preloaded_state) {
  return createStore(
    rootReducer,
    preloaded_state,
    applyMiddleware(thunkMiddleware)
  );
}
