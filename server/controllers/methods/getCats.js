import axios from 'axios';

export default async function getCats(query) {
  const { data } = await axios.get(
    `${process.env.CAT_API_URL}/v1/images/search${query}`,
    {
      headers: { 'x-api-key': process.env.CAT_API_KEY }
    }
  );

  return { cats: data };
}
