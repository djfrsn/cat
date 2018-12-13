import React from 'react';
import { hydrate } from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import App from './components/App';

const state = window.__STATE__;

delete window.__STATE__;

const store = configureStore(state);

//  hydrate - used to render html rendered by ReactDomServer
hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
