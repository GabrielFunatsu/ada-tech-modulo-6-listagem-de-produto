import "./styles.css";

import { useContext } from "react";
import "../../App.css";
import { ProductItemList } from "../../components/ProductItemList";

import { Header } from "../../components/Header/Header.jsx";
import { FilteredProductsContext } from "../../components/FilteredProductsContext/index.jsx";

import { useFetch } from "../../hooks/useFetch.jsx";

const Home = () => {
  const { filteredProducts, setFilteredProducts } = useContext(
    FilteredProductsContext
  );

  const { data, loading } = useFetch("products", setFilteredProducts);

  return (
    <>
      <Header products={data} />

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
