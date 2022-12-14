import React, { useState } from "react";
import productsData from "../assets/products.json";

const Products = ({ basket, setBasket, filterActive, checked }) => {
  const products = productsData.map((item) => ({ ...item, count: 1 }));

  const filterProducts = products.filter((item) => {
    return checked.includes(item.brand);
  });

  const renderProds = filterActive ? filterProducts : products;

  const handleAddToBasket = (item) => {
    const findItem = basket.find((el) => el.id === item.id)
    if (findItem) {
      return findItem.count++
    }
    setBasket([...basket, item]);
  };

  return (
    <>
      {renderProds.map((prod) => {
        return (
          <div key={prod.id} className="card">
            <p className="card_brand">{prod.brand}</p>
            <img src={prod.image} alt="" />
            <h3 className="card_title">{prod.title}</h3>
            <h5>
              {prod.regular_price.value}
              <span>{prod.regular_price.currency}</span>
            </h5>
            <p>{prod.type}</p>
            <button
              onClick={() => handleAddToBasket(prod)}
              className="card_btn"
            >
              Добавить в корзину
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
