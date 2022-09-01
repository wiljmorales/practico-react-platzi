import React, { useContext } from "react";
import '../styles/MyOrder.scss'
import AppContext from "../context/AppContext";
import { OrderItem } from "../components/OrderItem"
import arrow from '@assets/icons/flechita.svg'

export const MyOrder = () => {
  const { state } = useContext(AppContext)
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <h2 className="title">My order</h2>
      </div>
      <div className="my-order-content">
        {state.cart.map(item => {
          return <OrderItem item={item} key={`order-item-${item.id}`}/>
        })}
      <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${ state.cart.length > 0 
                  ? state.cart.map(product => parseFloat(product.price)).reduce((a,b) => a + b)
                  : 0.00
              }
          </p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
};
