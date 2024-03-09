import { Link } from "react-router-dom";
import './styles.css';
import logo from '../../assets/imagens/logo-best.png';

import { useCallback, useEffect, useRef, useState } from "react";
import "../../App.css";
import api from "../../api/api";
import { ProductItemList } from "../../components/ProductItemList";
import { SearchBar } from "../../components/SearchBar";

const Header = () => {

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
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
        <header>
          <div className="header__content">
            <nav>

              <figure>
                <Link to="/">
                  <img src={logo} alt="Best Browser Games" title="Best Browser Games" />
                </Link> 
              </figure>

              <div className="nav__button">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    onButtonClick={handleButtonClick}
                    onKeyDown={handleKeyPress}
                />
              </div>

            </nav>
          </div>
        </header>
    </>
  );
};

export { Header };