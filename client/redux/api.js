import axios from 'axios';

export async function getCats() {
  const { data } = await axios.get('/cats');

  return {
    cats: data
  };
}

export async function postFavoriteCat(payload) {
  const { data } = await axios.post('/favorite', payload);

  return {
    favorite: data
  };
}
