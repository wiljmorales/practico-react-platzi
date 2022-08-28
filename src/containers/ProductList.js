import React from "react";
import '../styles/ProductList.scss'
import { ProductItem } from "../components/ProductItem";

export const ProductList = () => {
  return (
    <section className="main-container">
      <div className="cards-container">
        <ProductItem />
      </div>
    </section>
  );
};
