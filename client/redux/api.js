import axios from 'axios';

export async function getCats() {
  const { data } = await axios.get('/cats');

  return {
    cats: data
  };
}
