// views/server are read from dist/dir
import renderApp from '../views/server';
import { initial_state } from '../views/redux/reducers';
import html from '../html';

import getCats from './methods/getCats';

export const getApp = async (req, res) => {
  const { cats } = await getCats('?limit=3');

  console.log('user', req.user);
  if (req.user) {
    console.log(
      'we have a user, authenticate user & render app with user data',
      req.user
    );
    const { preloaded_state, app } = renderApp({ ...initial_state, cats });

    const app_html = html('Cat', preloaded_state, app);

    res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.setHeader('x-api-key', 'public, max-age=600, s-maxage=1200');
    res.send(app_html);
  } else {
    res.redirect('/login');
  }
};
