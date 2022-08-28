import React from "react";
import { Order } from "../components/Order";
import '../styles/Orders.scss'

export const Orders = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="my-order-tittle">My orders</h1>
        <div className="my-order-content">
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </div>
  );
};
