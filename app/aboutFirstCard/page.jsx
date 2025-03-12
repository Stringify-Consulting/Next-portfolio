import React from 'react';
import Link from 'next/link';
import AboutMeCard from '../../components/aboutMefirstcard';  // Import the AboutMeCard component

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',  // Full viewport height
      backgroundColor: '#f5f5f5',  // Light background
    }}>
      <AboutMeCard />  {/* Render the AboutMeCard component */}
    </div>
  );
}


