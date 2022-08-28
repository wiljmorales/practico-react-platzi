import React from "react";
import '../styles/ProductInfo.scss';

export const ProductInfo = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="bike"
      />
      <div className="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          soluta consequuntur ab.
        </p>
        <button className="primary-button add-to-card-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  );
};
