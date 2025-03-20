'use client';
import Image from 'next/image';
import React from 'react';
import styles from './HomePageCard.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.pageContainer}>
        <Image
          src="/image/Tantalizer Home Page 2.png"
          alt="Light Theme Homepage"
          width={600}
          height={900}
          className={styles.pageImage}
        />
      </div>
      <div className={styles.pageContainer}>
        <Image
          src="/image/Frame 115.png"
          alt="Dark Theme Homepage"
          width={600}
          height={900}
          className={styles.pageImage}
        />
      </div>
    </div>
  );
};

export default HomePage;
