"use client";
import React from "react";
import Image from "next/image";
import { Bruno_Ace } from 'next/font/google'; 
import { Poppins } from 'next/font/google'; 
import styles from './ProductCard.module.css';
import NextProjectButton from '@/components/ArrowButton'; 

// Font imports
const poppins = Poppins({
  subsets: ['latin'],
  weight:  ['400', '700'],
});

const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

// Component definition
const ProjectCard: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Left section with text */}
      <div className={styles.textContainer}>
        <h2 className={`${styles.title} ${brunoAce.className}`}>NEXT PROJECT</h2>
        <h3 className={`${styles.projectTitle} ${poppins.className}`}>Restaurant Website </h3>
        <p className={`${styles.description} ${poppins.className}`}>Redesign</p>
        <NextProjectButton  disableMobile={true}  />
      </div>

      {/* Right section with image */}
      <div className={styles.imageContainer}>
        <Image
          src="/image/Scene 12 1.png" 
          alt="Project Image"
          width={350} 
          height={80}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
