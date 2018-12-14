import mongoose from 'mongoose';
const Favorite = mongoose.model('Favorite');

import getCats from './methods/getCats';

export const getCatsApi = async (req, res) => {
  const { cats } = await getCats('?limit=5');

  res.json(cats);
};

export const postFavoriteApi = async (req, res) => {
  const { url, user_id } = req.body;

  const data = await new Favorite({ url, user_id }).save();

  res.json(data);
};
