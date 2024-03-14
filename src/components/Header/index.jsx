import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import "../../App.css";
import logo from "../../assets/imagens/logo-fake-store.png";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { FilteredProductsContext } from "../FilteredProductsContext";
import { useFilter } from "../../hooks/useFilter";

const Header = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setFilteredProducts } = useContext(FilteredProductsContext);

  const { filtered } = useFilter(products, searchTerm, "title");

  useEffect(() => {
    setFilteredProducts(filtered);
  }, [filtered]);

  return (
    <>
      <header>
        <div className={styles.header__content}>
          <nav>
            <figure>
              <Link to="/">
                <img src={logo} alt="Fake Store" title="Fake Store" />
              </Link>
            </figure>

            <div className={styles.nav__button}>
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  products: PropTypes.array.isRequired,
};

export { Header };
