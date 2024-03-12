import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import "../../App.css";
import logo from "../../assets/imagens/logo-fake-store.png";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
import { FilteredProductsContext } from "../FilteredProductsContext";

const Header = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setFilteredProducts } = useContext(FilteredProductsContext);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

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
                <img src={logo} alt="Fake Store" title="Fake Store" />
              </Link>
            </figure>

            <div className="nav__button">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
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

Header.propTypes = {
  products: PropTypes.array.isRequired,
};

export { Header };
