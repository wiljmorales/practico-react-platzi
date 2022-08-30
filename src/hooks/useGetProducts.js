import { useEffect, useState } from 'react'
import axios from 'axios';

export const useGetProducts = (API_URL) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function  getProducts() {
      const resp = await axios(API_URL)
      setProducts(resp.data)
    }
    getProducts()
  }, [])

  return products
}
