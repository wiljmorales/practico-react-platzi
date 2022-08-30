import React, { useEffect, useState } from "react";
import '../styles/ProductList.scss'
import { ProductItem } from "../components/ProductItem";
import { useGetProducts } from "../hooks/useGetProducts";
const API_URL = 'https://api.escuelajs.co/api/v1/products'

export const ProductList = () => {
  const products = useGetProducts(API_URL)

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => {
          return <ProductItem key={product.id} product={product}/>
        })}
      </div>
    </section>
  );
};
