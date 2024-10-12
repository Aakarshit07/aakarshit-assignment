// 'use client';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products");
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
