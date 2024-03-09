// import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
// import api from "./api/api";
// import { ProductItemList } from "./components/ProductItemList";
// import { SearchBar } from "./components/SearchBar";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <GlobalStyle />
        
        <Routes>
          <Route path="/" element={<Home />} />        
        </Routes>

      </BrowserRouter>
    </div>
  );
}


// function App() {
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const loadingRef = useRef(true);

//   const getProducts = async () => {
//     try {
//       const { data } = await api.get(`products`);
//       setProducts(data);
//       setFilteredProducts(data);
//     } catch (error) {
//       throw new Error(error);
//     } finally {
//       loadingRef.current = false;
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const handleSearch = useCallback(() => {
//     const filtered = products.filter((product) =>
//       product.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [products, query]);

//   const handleButtonClick = () => {
//     handleSearch();
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <>
//       <SearchBar
//         query={query}
//         setQuery={setQuery}
//         onButtonClick={handleButtonClick}
//         onKeyDown={handleKeyPress}
//       />
//       {loadingRef.current ? (
//         <p>Carregando...</p>
//       ) : (
//         <ProductItemList products={filteredProducts} />
//       )}
//     </>
//   );
// }

export default App;
