import React from 'react'
import '../styles/ProductDetail.scss'
import {ProductInfo} from '../components/ProductInfo'

export const ProductDetail = () => {
  return (
    <aside class="product-detail">
    <div class="product-detail-close">
      <img src="./icons/icon_close.png" alt="close" />
    </div>
    <ProductInfo />
    </aside>
  )
}
