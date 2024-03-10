import PropTypes from "prop-types";
import "./styles.css";

const SearchBar = ({ leftIcon, query, setQuery, onButtonClick, onKeyDown }) => {
  return (
    <div className="input-container">
      {leftIcon && <div className="icon-container">{leftIcon}</div>}

      <input
        className="barra-de-pesquisa"
        type="text"
        placeholder="Pesquisar produto..."
        value={query}
        onChange={({ target: { value } }) => setQuery(value)}
        onKeyDown={onKeyDown}
      />

      <button onClick={onButtonClick}>Pesquisar</button>

    </div>
  );
};

SearchBar.propTypes = {
  leftIcon: PropTypes.element,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export { SearchBar };
