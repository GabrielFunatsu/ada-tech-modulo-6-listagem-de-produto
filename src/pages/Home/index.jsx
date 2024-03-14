import styles from "./styles.module.css";

import { useContext, useEffect } from "react";
import "../../App.css";
import { ProductItemList } from "../../components/ProductItemList/index.jsx";

import { Header } from "../../components/Header/index.jsx";
import { FilteredProductsContext } from "../../components/FilteredProductsContext/index.jsx";

import { useFetch } from "../../hooks/useFetch.jsx";

const Home = () => {
  const { filteredProducts, setFilteredProducts } = useContext(
    FilteredProductsContext
  );

  const { data, loading } = useFetch("products");

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

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
        <div className={styles.body__content}>
          <div className={styles.body__list}>
            {loading ? (
              <p className={styles.carregando}>Carregando...</p>
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
