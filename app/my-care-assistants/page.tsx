'use client';

import React from 'react';
import ToggleButton from '../../components/ToggleButton';
import NextProjectButton from '@/components/ArrowButton';
import ImageCardComponent from '../../components/ImageCardStructure';
import SlidingImageComponent from '@/components/SlidingImageCards';
import ProjectCard from '@/components/ProductCard';
import WantToKnowCard from '@/components/WantToKnowCard';
import Sidebar from '@/components/SliderBar';
import Image from 'next/image';
import styles from './MyCareAssistants.module.css';
import ThankYouFooter from '@/components/ThankYouCard';
import { Bruno_Ace, Poppins, Figtree } from 'next/font/google';

// Fonts
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });
const figtree = Figtree({ subsets: ['latin'], weight: '900' });

// Image list for sliding component
const images = [
  { src: "/image/Frame 53.png", alt: "First Image", width: 390, height: 500 },
  { src: "/image/Frame 54.png", alt: "Second Image", width: 390, height: 500 },
  { src: "/image/Frame 55.png", alt: "Third Image", width: 390, height: 500 },
  { src: "/image/Frame 53.png", alt: "Fourth Image", width: 390, height: 500 },
];

const MyCareAssistants: React.FC = () => {
  return (
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
          <Image src="/image/MCA LOGO SVG.png" alt="Logo" width={96} height={96} />
        </div>

        {/* Project Year */}
        <div className={`${brunoAce.className} ${styles.projectYear}`}>
          MYCARE ASSISTANT (MYQURA) - 2024
        </div>

        {/* Main Headings */}
        <h2 className={`${poppins.className} ${styles.mainHeading}`}>Care Service App for</h2>
        <span className={`${poppins.className} ${styles.subHeading}`}>
          Care Professionals & Patients
        </span>

        {/* Image Cards */}
        <div>
        <ImageCardComponent src="/image/scene 18(first image).png" alt="Scene 1" width={1272} height={705} />
        </div>
        

        {/* MYQURA CLIENT Section */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>MYQURA CLIENT</h2>
        <ImageCardComponent src="/image/shot(second image).png" alt="Scene 2" width={1272} height={705} />
        <ImageCardComponent src="/image/Slider(third image).png" alt="Scene 3" width={1272} height={705} />

        {/* MYQURA CARE PROFESSIONAL */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>MYQURA CARE</h2>
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>PROFESSIONAL</h2>
        <ImageCardComponent src="/image/Shot (fourth image).png" alt="Scene 4" width={1272} height={705} />
        <ImageCardComponent src="/image/Shot (fifth image).png" alt="Scene 5" width={1272} height={705} />

        {/* Sliding Images */}
        <div className={styles.sliderContainer}>
          <SlidingImageComponent images={images} />
        </div>

        {/* Admin Portal */}
        <h2 className={`${figtree.className} ${styles.sectionTitle}`}>ADMIN PORTAL</h2>
        <ImageCardComponent src="/image/iMac 24 inch (1).png" alt="Admin Portal" width={1272} height={705} />

        {/* Additional Components */}
        <WantToKnowCard />

        <div className={styles.projectCardContainer}>
          <ProjectCard />
        </div>

        {/* Thank You Footer */}
        <ThankYouFooter />
      </div>
    </div>
  );
};

export default MyCareAssistants;
