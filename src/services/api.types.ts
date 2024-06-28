import { Image } from '../types';

export interface ApiResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
