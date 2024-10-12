import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Discover Our Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicin. laboriosam aspernatur cumque deserunt obcaecati assumenda debitis!</p>
      </div>
    </section>
  );
};

export default HeroSection;
