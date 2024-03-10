import "./styles.css";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import "../../App.css";
import api from "../../api/api";
import { ProductItemList } from "../../components/ProductItemList";
import { SearchBar } from "../../components/SearchBar";
import { SearchProvider } from "../../components/SearchContext";

import { Header } from "../../components/Header/Header.jsx";
import {
  FilteredProductsContext,
  FilteredProductsProvider,
} from "../../components/FilteredProductsContext/index.jsx";

const Home = () => {
  const { filteredProducts, setFilteredProducts } = useContext(
    FilteredProductsContext
  );
  const [products, setProducts] = useState([]);
  const loadingRef = useRef(true);

  const getProducts = async () => {
    try {
      const { data } = await api.get(`products`);
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      loadingRef.current = false;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header products={products} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <SearchBar
              query={query}
              setQuery={setQuery}
              onButtonClick={handleButtonClick}
              onKeyDown={handleKeyPress}
          /> */}

      <div>
        <div className="body__content">
          <div className="body__list">
            {loadingRef.current ? (
              <p>Carregando...</p>
            ) : (
              <ProductItemList products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { Home };