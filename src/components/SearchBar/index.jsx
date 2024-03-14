import PropTypes from "prop-types";
import styles from "./styles.module.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles["input-container"]}>

      <input
        className={styles["barra-de-pesquisa"]}
        type="text"
        placeholder="Pesquisar produto..."
        value={searchTerm}
        onChange={({ target: { value } }) => setSearchTerm(value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  leftIcon: PropTypes.element,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export { SearchBar };
