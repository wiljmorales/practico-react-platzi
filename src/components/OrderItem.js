import React from "react";
import '../styles/OrderItem.scss';

import iconClose from "@assets/icons/icon_close.png"

export const OrderItem = ({item}) => {
  return (
    <div className="order-item">
      <figure>
        <img
          src={item.images[0]}
          alt={item.title}
        />
      </figure>
      <p>{item.title}</p>
      <p>${item.price}</p>
      <img src={iconClose} alt="close" />
    </div>
  );
};
