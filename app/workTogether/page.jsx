import Link from 'next/link';
import React from 'react';
import WorkTogether from '../../components/letsworktogethercard';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '70px' }}></h1>
      <WorkTogether />
    </div>
  );
};

export default Home;