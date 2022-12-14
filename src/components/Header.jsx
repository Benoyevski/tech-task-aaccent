import React from "react";
import { Link } from "react-router-dom";

const Header = ({ basket }) => {
  return (
    <header>
      <Link className="title" to={"/"}>
        <h1>Header</h1>
      </Link>

      <span className="basket">
        <Link to={"/basket"}>
          <img src="basket.png" alt="" />
          <p className="basket_count">{basket.length}</p>
        </Link>
      </span>
    </header>
  );
};

export default Header;
