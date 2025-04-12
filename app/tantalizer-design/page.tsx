'use client';

import React from 'react';
import ToggleButton from '../../components/ToggleButton';
import NextProjectButton from '@/components/ArrowButton';
import ImageCardComponent from '../../components/ImageCardStructure';
import ProjectCard from '@/components/ProductCard';
import WantToKnowCard from '@/components/WantToKnowCard';
import Sidebar from '@/components/SliderBar';
import HomePageCard from '@/components/HomePageCard';
import Image from 'next/image';
import styles from './TantalizerDesign.module.css';
import MenuSlider from '@/components/SliderImage';
import ThankYouFooter from '@/components/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });

const images = [
  { src: '/image/Tantalizer Home Page 2.png', alt: 'Light Theme Homepage' },
  { src: '/image/Frame 115.png', alt: 'Dark Theme Homepage' },
];

const menuItems = [
  {
    src: '/image/Menu Page 1.png',
    alt: 'Light Theme Homepage',
    title: 'MENU',
  },
  {
    src: '/image/Sidebar Cart Page 1.png',
    alt: 'Dark Theme Homepage',
    title: 'SIDEBAR CART',
  },
  {
    src: '/image/shopping_cart.png',
    alt: 'Another Menu',
    title: 'CART',
  },
  {
    src: '/image/checkout.png',
    alt: 'Another Menu',
    title: 'CHECKOUT',
  },
  {
    src: '/image/success page.png',
    alt: 'Another Menu',
    title: 'SUCCESS PAGE',
  },
  {
    src: '/image/Track your order page.png',
    alt: 'Another Menu',
    title: 'TRACK YOUR ORDER',
  },
];

const MyCareAssistants: React.FC = () => {
  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Background Image */}
        <Image
          src="/image/shin.png"
          alt="Background"
          fill
          className={styles.bgImage}
          priority
        />

        {/* Sidebar */}
        <Sidebar />


    <div className={styles.rowContainer}>
       <div className={styles.leftspace}></div>

       <div className={styles.centerToggle}>
       <ToggleButton />
       </div>
    
        <div>
        <NextProjectButton />
        </div>
      </div>
      
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image src="/image/tantalizer_logo.png" alt="Logo" width={96} height={96} />
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          TANTALIZERS - 2023
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Restaurant Website</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Redesign
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/image/MOCKUP 5.jpg" alt="Scene 1" width={1072} height={505} />
        </div>
        

        {/* Homepage Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>HOME PAGE</h2>
        <HomePageCard images={images} />
       
        {/* Menu Section */}
        <MenuSlider items={menuItems} />
        
        
        {/* Want to know  Components */}
        <WantToKnowCard />

        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Real Estate Website"
        description="Redesign"
        imageSrc="/image/Scene 12 1 (1).png"
      />
        </div>

        {/* Thank You Footer */}
        <ThankYouFooter />
      </div>
    </div>
    </>

  );
};

export default MyCareAssistants;
