import React, { useState } from "react";
import brands from "../assets/brands.json";

const Categories = ({checked,setChecked, setActive}) => {

  const handleCheck = (id) => {
    if (checked.includes(id)) {
      return setChecked(checked.filter((num) => num !== id));
    }
    setChecked([...checked, id]);
  };

  const filterHandler = () => {
    if (checked.length > 0) {
      return setActive(true);
    }
    setActive(false);
  };

  const handleReset = () => {
    setChecked([]);
    setActive(false);
  };

  return (
    <div>
      <ul>
        <p className="brands_title">Бренды</p>
        {brands.map((brand) => {
          return (
            <div key={brand.id} className="brand_item">
              <input
                onChange={() => handleCheck(brand.id)}
                checked={checked.includes(brand.id)}
                className="checkbox"
                type="checkbox"
              />
              <li className="brand_item__text">{brand.title}</li>
            </div>
          );
        })}
      </ul>
      <button onClick={filterHandler} className="brands_btn">
        Применить
      </button>
      <p onClick={handleReset} className="brands_reset">
        x<span>Сбросить</span>
      </p>
    </div>
  );
};

export default Categories;
