import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasketProduct from "../components/BasketProduct";

const BasketPage = ({ basket, setBasket }) => {
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();

  const totalPrice = basket.reduce(
    (sum, obj) => obj.regular_price.value * obj.count + sum,
    0
  );

  const handleResetBasket = () => {
    setBasket([]);
    navigate("/");
  };

  const handleSale = () => {
    setModalOn(true);
  };

  const handleCloseModal = () => {
    setModalOn(false);
    setBasket([]);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div className="basket_container">
      {modalOn && (
        <div className="modal">
          <div className="modal_text">
            <p onClick={handleCloseModal} className="closeModal">
              X
            </p>
            Заказ успешно оформлен!
          </div>
        </div>
      )}
      <h3 className="basket_title">Корзина</h3>
      <div className="basket_list">
        <h4 className="total_price">
          Общая стоимость:
          <p className="basket_price">{totalPrice.toFixed(2)} USD</p>
        </h4>
        {basket.length > 0 ? (
          <button onClick={handleResetBasket} className="basket_reset">
            Очистить корзину
          </button>
        ) : (
          <div className="empty_basket">Корзина пуста!</div>
        )}
        <ul>
          {basket.map((prod) => {
            return <BasketProduct prod={prod} />;
          })}
        </ul>
        {basket.length > 0 && (
          <button onClick={handleSale} className="sale">
            Оформить заказ
          </button>
        )}
      </div>
    </div>
  );
};

export default BasketPage;
