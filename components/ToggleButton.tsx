"use client";
import React, { useState, useEffect } from 'react';
import { Bruno_Ace } from 'next/font/google';
import styles from './ToggleButton.module.css'; // Import the CSS Module

// Correct usage of the BrunoAce font
const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

const ToggleButton: React.FC = () => {
  // State to track the active toggle
  const [isFull, setIsFull] = useState<boolean>(true); // Initially set to "Full"
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Effect to update the screen size and determine if it is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is <= 768px (mobile)
    };

    // Call it initially to set the correct state
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container} onClick={() => setIsFull(!isFull)}>
      {/* Full Option */}
      <div
        className={styles.option}
        style={{
          color: isFull ? '#fff' : '#bbb', // Change text color based on active state
        }}
      >
        <span
          className={`${brunoAce.className} ${styles.letter}`}
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '2px',
            gap: '8px',
            marginRight: '10px',
            marginBottom: '30px',
            marginTop: '20px',
            marginLeft: '10px',
          }}
        >
          F
        </span>
        {/* Conditionally render Full text only if not mobile */}
        {!isMobile && <span>Full</span>}
      </div>

      {/* Designs Option */}
      <div
        className={styles.option}
        style={{
          color: !isFull ? '#fff' : '#bbb', // Change text color based on active state
        }}
      >
        <span
          className={`${brunoAce.className} ${styles.letter}`}
          style={{
            width: '25px',
            height: '25px',
            borderRadius: '2px',
            gap: '8px',
            marginRight: '10px',
            marginBottom: '30px',
            marginTop: '20px',
            marginLeft: '10px',
          }}
        >
          D
        </span>
        {/* Conditionally render Designs text only if not mobile */}
        {!isMobile && <span>Designs</span>}
      </div>

      {/* The toggle button */}
      <div
        className={styles.innerCircle}
        style={{
          left: isFull ? '0' : '47%', // Move the circle to the left for "Full" and to the right for "Designs"
        }}
      ></div>
    </div>
  );
};

export default ToggleButton;
