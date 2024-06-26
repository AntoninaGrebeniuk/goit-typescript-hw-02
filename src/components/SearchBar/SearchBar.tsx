export const SearchBar = ({ getQuery }) => {
  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.trim().toLowerCase();
    getQuery(query);
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
