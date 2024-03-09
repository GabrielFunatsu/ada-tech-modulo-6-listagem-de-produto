import { useEffect, useState } from "react";
import "./App.css";
import api from "./api/api";
import { ProductItemList } from "./components/ProductItemList";

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  const getProducts = async () => {
    try {
      const { data } = await api.get(`products`);
      setProducts(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <ProductItemList products={products} />;
}

export default App;
