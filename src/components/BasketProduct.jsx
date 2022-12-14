import React from "react";

const BasketProduct = ({ prod }) => {
  return (
    <div className="basket_item">
      <div className="basket_prod_info">
        <img className="basket_img" src={prod.image} alt="" />
        <p className="basket_prod_title">{prod.title}</p>
        <div>
          Размер<p className="basket_sku">{prod.sku}</p>
        </div>
        <div>
          Бренд
          <p>{prod.brand}</p>
        </div>
        <div>
          Количество
          <p className="basket_item_count">{prod.count}</p>
        </div>
      </div>
      <div>
        Цена
        <p className="basket_price">
          {(prod.regular_price.value * prod.count).toFixed(2)}
          <span>{prod.regular_price.currency}</span>
        </p>
      </div>
    </div>
  );
};

export default BasketProduct;
