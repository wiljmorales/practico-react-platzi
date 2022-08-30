import React from "react";
import '../styles/OrderItem.scss';

import iconClose from "@assets/icons/icon_close.png"

export const OrderItem = () => {
  return (
    <div className="order-item">
      <figure>
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bike"
        />
      </figure>
      <p>Bike</p>
      <p>$30,00</p>
      <img src={iconClose} alt="close" />
    </div>
  );
};
