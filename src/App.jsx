import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home/Home";
import { FilteredProductsProvider } from "./components/FilteredProductsContext";

function App() {
  return (
    <div className="App">
      <FilteredProductsProvider>
        <BrowserRouter>
          <GlobalStyle />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </FilteredProductsProvider>
    </div>
  );
}

export default App;
