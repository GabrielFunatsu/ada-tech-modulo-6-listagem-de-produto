import { createContext, useState } from "react";

const FilteredProductsContext = createContext();

const FilteredProductsProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <FilteredProductsContext.Provider
      value={{ filteredProducts, setFilteredProducts }}
    >
      {children}
    </FilteredProductsContext.Provider>
  );
};

export { FilteredProductsContext, FilteredProductsProvider };
