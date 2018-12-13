// views/server are read from dist/dir
import renderApp from '../views/server';
import html from '../html';

const initial_state = { name: 'Hello' };

export const getApp = async (req, res) => {
  // const initial_state = await

  const { preloaded_state, app } = renderApp(initial_state);

  const response = html('Cat', preloaded_state, app);

  res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.setHeader('x-api-key', 'public, max-age=600, s-maxage=1200');
  res.send(response);
};
