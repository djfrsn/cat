import axios from 'axios';

// views/server are read from dist/dir
import renderApp from '../views/server';
import html from '../html';

async function getCats(query) {
  const { data } = await axios.get(
    `${process.env.CAT_API_URL}/v1/images/search${query}`,
    {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    }
  );

  return { cats: data };
}

export const getApp = async (req, res) => {
  const initial_state = await getCats('?limit=10');

  const { preloaded_state, app } = renderApp(initial_state);

  const app_html = html('Cat', preloaded_state, app);

  res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.setHeader('x-api-key', 'public, max-age=600, s-maxage=1200');
  res.send(app_html);
};
