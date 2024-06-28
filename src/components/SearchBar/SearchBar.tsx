import { FC } from 'react';
import { FormEvent } from 'react';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: FC<SearchBarProps> = ({ getQuery }) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = form.query.value.trim().toLowerCase();
    getQuery(query);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">
        <input type="text" name="query" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
