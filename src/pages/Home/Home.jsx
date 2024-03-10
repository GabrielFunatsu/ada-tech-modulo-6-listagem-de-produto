import "./styles.css";

import { useContext, useEffect, useRef, useState } from "react";
import "../../App.css";
import api from "../../api/api";
import { ProductItemList } from "../../components/ProductItemList";

import { Header } from "../../components/Header/Header.jsx";
import {
  FilteredProductsContext,
} from "../../components/FilteredProductsContext/index.jsx";

const Home = () => {
  const { filteredProducts, setFilteredProducts } = useContext(
    FilteredProductsContext
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const { data } = await api.get(`products`);
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading (false);
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

      <div>
        <div className="body__content">
          <div className="body__list">
            {loading ? (
              <p className="carregando">Carregando...</p>
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
