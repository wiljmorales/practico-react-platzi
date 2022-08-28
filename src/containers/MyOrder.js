import React from "react";
import '../styles/MyOrder.scss'
import { OrderItem } from "../components/OrderItem"

export const MyOrder = () => {
  return (
    <aside class="MyOrder">
      <div class="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <h2 class="title">My order</h2>
      </div>
      <div class="my-order-content">
      <OrderItem />
      <div class="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button class="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
};
