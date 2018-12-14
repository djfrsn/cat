import mongoose from 'mongoose';
const Favorite = mongoose.model('Favorite');

import getCats from './methods/getCats';

export const getCatsApi = async (req, res) => {
  const { cats } = await getCats('?limit=5');

  res.json(cats);
};

export const postFavoritesApi = async (req, res) => {
  const { url, id } = req.body;

  const { favorites } = await new Favorite({ url, user_id: '0' }).save();

  res.json(favorites);
};
