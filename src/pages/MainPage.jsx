import React, { useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";

const MainPage = ({ basket, setBasket }) => {
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState([]);

  return (
    <div className="container">
      <div className="brands">
        <Categories
          checked={checked}
          setChecked={setChecked}
          setActive={setActive}
        />
      </div>
      <div className="list">
        <Products
          checked={checked}
          filterActive={active}
          basket={basket}
          setBasket={setBasket}
        />
      </div>
    </div>
  );
};

export default MainPage;
