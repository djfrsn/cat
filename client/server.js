import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';

export default function render(initial_state) {
  const store = configureStore(initial_state);

  let app = renderToString(
    <Provider>
      <App />
    </Provider>
  );

  const preloaded_state = store.getState();

  return { app, preloaded_state };
}
