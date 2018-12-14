import getCats from './methods/getCats';

export const getCatsApi = async (req, res) => {
  const { cats } = await getCats('?limit=5');

  res.json(cats);
};
