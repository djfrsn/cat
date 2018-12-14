// views/server are read from dist/dir
import renderApp from '../views/server';
import { initial_state } from '../views/redux/reducers';
import html from '../html';

import getCats from './methods/getCats';
import getFavorites from './methods/getFavorites';

export const getApp = async (req, res) => {
  const user = req.signedCookies.user;

  if (user) {
    const { _id: user_id } = user;
    const { cats } = await getCats('?limit=3');

    // Todo: get user favorites and add to state
    const favorites = await getFavorites({ user_id });

    const { preloaded_state, app } = renderApp({
      ...initial_state,
      cats,
      favorites,
      user_id
    });

    const app_html = html('Cat', preloaded_state, app);

    res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.setHeader('x-api-key', 'public, max-age=600, s-maxage=1200');
    res.send(app_html);
  } else {
    res.redirect('/login');
  }
};
