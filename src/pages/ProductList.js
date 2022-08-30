import React, { useEffect, useState } from "react";
import '../styles/ProductList.scss'
import { ProductItem } from "../components/ProductItem";
import axios from "axios";

const API_URL = 'https://api.escuelajs.co/api/v1/products'

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(async() => {
    const resp = await axios(API_URL)
    setProducts(resp.data)
  }, []);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map(product => {
          return <ProductItem />
        })}
      </div>
    </section>
  );
};
