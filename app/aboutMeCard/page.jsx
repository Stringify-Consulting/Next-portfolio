import React from 'react';
import Link from 'next/link';
import AboutMe from '../../components/aboutMeCard';

function HomePage() {
  return (
    <div>
      <AboutMe />
      {/* Link to another page */}
   <Link href="/" style={{ color: '#3182ce', textDecoration: 'underline' }}>
   Go to Another Page
 </Link>
    </div>
  );
}

export default HomePage;
