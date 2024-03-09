import PropTypes from "prop-types";

const SearchBar = ({ query, setQuery, onButtonClick, onKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={onKeyDown}
      />
      <button onClick={onButtonClick}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export { SearchBar };
