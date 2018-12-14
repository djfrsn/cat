import mongoose from 'mongoose';
const Favorite = mongoose.model('Favorite');

export default async function saveFavoriteCat({ url, user_id }) {
  // save favorite to db ... make random users until we have auth
  const favorites = await new Favorite({ url, user_id: '0' }).save();
  // then return list of all favorites
  console.log('fav', favorites);

  return { favorites: [{ id: '1' }] };
}
