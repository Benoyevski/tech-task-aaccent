import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Products from "./components/Products";
import BasketPage from "./pages/BasketPage";
import MainPage from "./pages/MainPage";

const App = () => {
  const [basket, setBasket] = useState([]);

  return (
    <>
      <Header basket={basket} />
      <Routes>
        <Route
          path="/"
          element={<MainPage basket={basket} setBasket={setBasket} />}
        />
        <Route path="/basket" element={<BasketPage setBasket={setBasket} basket={basket} />} />
      </Routes>
    </>
  );
};

export default App;
