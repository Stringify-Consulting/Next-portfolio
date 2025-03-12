import React from 'react';
import Link from 'next/link';


const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        height: '100vh', // Full viewport height
        backgroundColor: '#f5f5f5', // Light background color for contrast
        flexDirection: 'column'
      }}
    >
      
       {/* Link to another page */}
   <Link href="/aboutMeCard" style={{ color: '#3182ce', textDecoration: 'underline' }}>
   About Me Card Component
 </Link>
 <Link href="/aboutFirstCard" style={{ color: '#3182ce', textDecoration: 'underline' }}>
 About First Card Component
 </Link>
 <Link href="/button" style={{ color: '#3182ce', textDecoration: 'underline' }}>
 Button Component
 </Link>
 <Link href="/workTogether" style={{ color: '#3182ce', textDecoration: 'underline' }}>
  Let Work Together Component
 </Link>
    </div>
      
  );
};

export default Home;




