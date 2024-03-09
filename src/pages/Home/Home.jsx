import './styles.css';

import { useCallback, useEffect, useRef, useState } from "react";
import "../../App.css";
import api from "../../api/api";
import { ProductItemList } from "../../components/ProductItemList";
import { SearchBar } from "../../components/SearchBar";

import { Header } from '../../components/Header/Header.jsx';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  const handleSearch = useCallback(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, query]);

  const handleButtonClick = () => {
    handleSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
        <Header />

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

        <body>

          <div className="body__content">

            <div className="body__list">

              {loadingRef.current ? (
                  <p>Carregando...</p>
              ) : (
                  <ProductItemList products={filteredProducts} />
              )}  

            </div> 

          </div>
          

        </body>    
    </>
  );

}

export { Home }