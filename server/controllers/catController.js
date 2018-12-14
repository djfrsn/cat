import getCats from './methods/getCats';
import saveFavoriteCat from './methods/saveFavoriteCat';

export const getCatsApi = async (req, res) => {
  const { cats } = await getCats('?limit=5');

  res.json(cats);
};

export const postFavoritesApi = async (req, res) => {
  const { url, id } = req.body;

  const { favorites } = await saveFavoriteCat({ id, url });

  res.json(favorites);
};
