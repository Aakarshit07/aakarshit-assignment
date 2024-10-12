'use client';
import React, { useState } from 'react';
import styles from './FilterToolBar.module.css';
import FilterSection from '@/components/FilterSection/FilterSection';
import ProductList from '@/components/ProductList/ProductList';

const FilterToolBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <button onClick={toggleFilters} className={styles.filterButton}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <button className={styles.recommendedButton}>Recommended</button>
      </div>
      <div className={styles.content}>
        {showFilters && <FilterSection />}
        <ProductList />
      </div>
    </div>
  );
};

export default FilterToolBar;
