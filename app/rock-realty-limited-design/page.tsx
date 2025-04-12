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
import  HeroSection from '@/components/VideoCard';
import styles from './RockRealtyLimitedDesign.module.css';
import ThankYouFooter from '@/components/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';


// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });

const images = [
  { src: '/image/Rock Realty Homepage 1.png', alt: 'Light Theme Homepage' },
  { src: '/image/Rock Realty Homepage 2.png', alt: 'Dark Theme Homepage' },
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
          <Image src="/image/image 2.png" 
          alt="Logo" 
          width={304} 
          height={96}
          className={styles.logo}/>
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          ROCK REALTY LIMITED - 2024
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Real Estate Website</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Redesign
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/image/Rock Realty Main.png" alt="Scene 1" width={1072} height={505} />
        </div>
        

        {/* Homepage Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>HOME PAGE</h2>
        <HeroSection />
        <HomePageCard images={images} />
        

        {/* Project Page Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>PROJECT PAGE</h2>
        <ImageCardComponent src="/image/Free iPad Pro mockup on white table (Mockuuups Studio).png" alt="Scene 1" width={1072} height={505} />
        
         {/* Project Page Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>INVESTMENT PAGE</h2>
        <ImageCardComponent src="/image/Mockup 22.png" alt="Scene 1" width={1072} height={505} />
        

        {/* Want to know  Components */}
        <WantToKnowCard />

        <div className={styles.projectCardContainer}>
        <ProjectCard
        title="NEXT PROJECT"
        projectTitle="Courier Service App"
        description="for Delivery Service"
        imageSrc="/image/Scene 12 1 (2).png"
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
