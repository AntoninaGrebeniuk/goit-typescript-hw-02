import axios from 'axios';
import { ApiResponse } from './api.types';

const api = axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    client_id: 'q_ilJfeXbJ7aLVkUf1TArJA5EUScrQgLm08H3UJvYpI',
  },
});

export async function fetchImages(
  query: string,
  page: number,
  per_page: number = 12
): Promise<ApiResponse> {
  const { data } = await api.get<ApiResponse>('/search/photos', {
    params: { query, page, per_page, orientation: 'landscape' },
  });

  return data;
}
