import React, { useContext } from "react";
import '../styles/OrderItem.scss';
import AppContext from "../context/AppContext";

import iconClose from "@assets/icons/icon_close.png"

export const OrderItem = ({item}) => {
  const { removeFromCart } = useContext(AppContext)
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
      <img 
        src={iconClose} 
        alt="close" 
        onClick={() => removeFromCart(item)}
      />
    </div>
  );
};
