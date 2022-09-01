import { useState } from "react";

const initialState = {
  cart: [],
}

export const useInitialState = () => {
  const [ state, setState] = useState(initialState)
  const addToCart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const removeFromCart = payload => {
    setState({
      ...state,
      cart : state.cart.filter(item => item.id != payload.id)
    })
  }

  return {
    state,
    addToCart,
    removeFromCart
  }
}