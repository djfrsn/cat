const mongoose = require('mongoose');
const Favorite = mongoose.model('Favorite');

export default async function getFavorites({ user_id }) {
  const favorites = await Favorite.find({ user_id });

  return favorites;
}
