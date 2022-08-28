import React from 'react'
import '../styles/Checkout.scss'
import { OrderItem } from '../components/OrderItem'

export const Checkout = () => {
  return (
    <aside className="checkout">
    <div className="title-container">
      <img src="./icons/flechita.svg" alt="arrow" />
      <h2 className="title">My order</h2>
    </div>
    <div className="my-order-content">
    <OrderItem/>
    <OrderItem/>
    <OrderItem/>
    <OrderItem/>
    <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  )
}
