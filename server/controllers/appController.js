// views/server are read from dist/dir
import renderApp from '../views/server';
import html from '../html';

const initial_state = { name: 'Hello' };

export const getApp = (req, res) => {
  const { preloaded_state, app } = renderApp(initial_state);

  const response = html('Cat', preloaded_state, app);

  res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(response);
};
