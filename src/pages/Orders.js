import React from "react";
import { Order } from "../components/Order";
import '../styles/Orders.scss'

export const Orders = () => {
  return (
    <div class="my-order">
      <div class="my-order-container">
        <h1 class="my-order-tittle">My orders</h1>
        <div class="my-order-content">
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </div>
  );
};
