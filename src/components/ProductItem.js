import React, { useContext } from "react";
import '../styles/ProductItem.scss'
import AppContext from "../context/AppContext";

import addToCartIcon from '@assets/icons/bt_add_to_cart.svg' 

export const ProductItem = ({product}) => {
  const { addToCart } = useContext(AppContext)


  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
        className="product-item-img"
      />
      <div className="product-item-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => {
            addToCart(product)
          }}>
          <img src={addToCartIcon} alt="add to cart button" />
        </figure>
      </div>
    </div>
  );
};
