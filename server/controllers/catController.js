import getCats from './methods/getCats';
import postFavoriteCat from './methods/postFavoriteCat';

export const getCatsApi = async (req, res) => {
  const { cats } = await getCats('?limit=5');

  res.json(cats);
};

export const postFavoritesApi = async (req, res) => {
  const { favorites } = await postFavoriteCat({ id: req.body.id });

  res.send('ok');
};
