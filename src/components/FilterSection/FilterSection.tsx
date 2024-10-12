'use client';
import React from 'react';
import styles from './FilterSection.module.css';

const FilterSection = () => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.filterCard}>
        <h4>Categories</h4>
        <div className={styles.checkboxRadioGroup}>
          <label>
            <input type="checkbox" />
            Electronics
          </label>
          <label>
            <input type="checkbox" />
            Clothing
          </label>
          <label>
            <input type="radio" name="price" />
            Under $50
          </label>
          <label>
            <input type="radio" name="price" />
            Above $50
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
