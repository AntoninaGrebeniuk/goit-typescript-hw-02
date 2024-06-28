import axios from 'axios';
// import { Image } from '../types';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: 'q_ilJfeXbJ7aLVkUf1TArJA5EUScrQgLm08H3UJvYpI',
  },
});

export async function fetchImages<T>(
  query: string,
  page: number,
  per_page: number = 12
): Promise<T> {
  const { data } = await api.get<T>('/search/photos', {
    params: { query, page, per_page, orientation: 'landscape' },
  });

  return data;
}
