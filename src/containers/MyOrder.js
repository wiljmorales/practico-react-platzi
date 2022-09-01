import React, { useContext } from "react";
import '../styles/MyOrder.scss'
import AppContext from "../context/AppContext";
import { OrderItem } from "../components/OrderItem"
import arrow from '@assets/icons/flechita.svg'

export const MyOrder = () => {
  const { state } = useContext(AppContext)
  return (
    <aside class="MyOrder">
      <div class="title-container">
        <img src={arrow} alt="arrow" />
        <h2 class="title">My order</h2>
      </div>
      <div class="my-order-content">
        {state.cart.map(item => {
          return <OrderItem item={item} key={`order-item-${item.id}`}/>
        })}
      <div class="order">
          <p>
            <span>Total</span>
          </p>
          <p>${state.cart.map(product => parseFloat(product.price)).reduce((a,b) => a + b)}</p>
        </div>
        <button class="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
};
