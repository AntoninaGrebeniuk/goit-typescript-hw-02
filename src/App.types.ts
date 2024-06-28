import { Image } from './types';

export interface FetchResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
