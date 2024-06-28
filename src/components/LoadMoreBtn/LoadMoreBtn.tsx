import { FC } from 'react';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return <button onClick={onClick}>Load More</button>;
};
