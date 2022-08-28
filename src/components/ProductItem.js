import React from "react";
import '../styles/ProductItem.scss'

export const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="product-item-img"
      />
      <div className="product-item-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="" />
        </figure>
      </div>
    </div>
  );
};
