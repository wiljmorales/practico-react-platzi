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
  return {
    state,
    addToCart
  }
}