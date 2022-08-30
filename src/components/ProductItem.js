import React from "react";
import '../styles/ProductItem.scss'

import addToCart from '@assets/icons/bt_add_to_cart.svg' 

export const ProductItem = ({product}) => {
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
        <figure>
          <img src={addToCart} alt="add to cart button" />
        </figure>
      </div>
    </div>
  );
};
