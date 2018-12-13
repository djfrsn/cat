// Render React App on the server
import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import configureStore from '../client/redux/configureStore';
import App from '../client/components/App';

const title = 'Cat';

export default function render(initial_state) {
  const store = configureStore(initial_state);

  let app = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloaded_state = store.getState();

  return { title, app, preloaded_state };
}
