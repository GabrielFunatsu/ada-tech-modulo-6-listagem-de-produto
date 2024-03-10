import React from "react";
import { Home } from "./Home"; // Importe o componente Home correto
import { SearchProvider } from "../../components/SearchContext";
import { FilteredProductsProvider } from "../../components/FilteredProductsContext";

const HomeWrapper = () => {
  return (
    <SearchProvider>
      <FilteredProductsProvider>
        <Home />
      </FilteredProductsProvider>
    </SearchProvider>
  );
};

export { HomeWrapper };
