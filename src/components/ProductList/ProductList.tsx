'use client';
import React from 'react';
import styles from './ProductList.module.css';
import useFetchProducts from '@/hooks/useFetchProducts';
import Image from 'next/image';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <div className={styles.image}>
            <Image 
              src={product.image} 
              alt={product.title} 
              width={290} 
              height={399} 
            />
          </div>
          <span className={styles.title}>{product.title}</span>
        </div>
        
      ))}
    </section>
  );
};

export default ProductList;

