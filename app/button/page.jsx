import React from 'react';
import Link from 'next/link';
import ButtonWithIcon from '../../components/Buttons'; // Import the ButtonWithIcon component

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Full viewport height
        backgroundColor: '#f5f5f5', // Light background color for contrast
      }}
    >
      <ButtonWithIcon email="lajimohofficial@gmail.com" />
    </div>
  );
};

export default Home;




