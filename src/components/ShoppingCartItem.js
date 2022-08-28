import React from "react";
import '../styles/ShoppingCartItem.scss';

export const ShoppingCartItem = () => {
  return (
    <div class="shopping-cart">
      <figure>
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bike"
        />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
    </div>
  );
};
