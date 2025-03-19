import React from 'react';
import NextProjectButton from '@/components/ArrowButton';

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      
      <NextProjectButton  />
    </div>
  );
};

export default Home;


