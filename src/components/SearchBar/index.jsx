import PropTypes from "prop-types";
import "./styles.css";

const SearchBar = ({
  leftIcon,
  searchTerm,
  setSearchTerm,
  onButtonClick,
  onKeyDown,
}) => {
  return (
    <div className="input-container">
      {leftIcon && <div className="icon-container">{leftIcon}</div>}

      <input
        className="barra-de-pesquisa"
        type="text"
        placeholder="Pesquisar produto..."
        value={searchTerm}
        onChange={({ target: { value } }) => setSearchTerm(value)}
        onKeyDown={onKeyDown}
      />

      <button onClick={onButtonClick}>Pesquisar</button>
    </div>
  );
};

SearchBar.propTypes = {
  leftIcon: PropTypes.element,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export { SearchBar };
