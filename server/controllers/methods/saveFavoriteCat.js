import mongoose from 'mongoose';
const Favorite = mongoose.model('Favorite');

export default async function saveFavoriteCat({ url, user_id }) {
  // save favorite to db...
  const favorites = await new Favorite({ url, user_id: '0' }).save();

  return { favorites };
}
