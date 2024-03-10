import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FilteredProductsContext = createContext();

const FilteredProductsProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const contextValue = {
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <FilteredProductsContext.Provider value={contextValue}>
      {children}
    </FilteredProductsContext.Provider>
  );
};

FilteredProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FilteredProductsContext, FilteredProductsProvider };
