"use client"
import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaDribbble , FaXTwitter  } from 'react-icons/fa6'; 

export default function AboutMeCard() {
  return (
   <div style={{ 
           position: "relative", 
           width: "100%",
            height: "100vh",
            backgroundColor: 'black',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center', 
            }}>
         <Image 
           src="/image/shine.png" 
           alt="Background" 
           layout="fill" 
           objectFit="cover"
         />
    <div style={{
      backgroundColor: '#1a1a1a',  // Dark background to match the image
      borderRadius: '25px',
      width: '400px',  // Card width
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',  // Soft shadow effect
      border: '1px solid white',
      height: '336px',
      border: '1px solid #9e9e9e',
      paddingLeft: '30px',
      paddingRight: '30px',
      zIndex: 1,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        paddingTop: '20px',
      }}>
      <p style={{
        color: '#ffffff',
        fontFamily: 'poppins',
        fontWeight: '450',
        lineHeight: '100%',
        letterSpacing: '0%',
        left:'24px',
        height: '216px',
        fontSize: '30px',
      }}>
        As an exceptional product designer with three (3) years of experience, I thrive on merging creativity and functionality to achieve user-centric solutions.
      </p>
         
      </div>
      
      
      {/* Icons and Button on the same line */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  // Center the items vertically
        gap: '30px', 
        
      }}>

      
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  // Center the items vertically
        backgroundColor: '#444343',
        width:'32px',
        height:'32px',
        top:'280px',
        left:'120px',
        border: '1px solid #9e9e9e',
        borderRadius: '20px',
      }}>
        <a href="https://x.com/lajimohofficial" target="_blank" rel="noopener noreferrer">
           <FaXTwitter style={{ color: 'white', fontSize: '20px' }} />
        </a>
        </div>
        
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',  // Center the items vertically
            backgroundColor: '#444343',
            width:'32px',
            height:'32px',
            top:'280px',
            left:'24px',
            border: '1px solid #9e9e9e',
            borderRadius: '20px',
        
      }}>
        <a href="https://www.linkedin.com/in/lawal-jimoh/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ color: 'white', fontSize: '20px' }} />
        </a>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  // Center the items vertically
        width:'32px',
        height:'32px',
        top:'280px',
        left:'72px',
        border: '1px solid #9e9e9e',
        borderRadius: '20px',
        backgroundColor: '#444343',
      }}>
       <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
          <FaDribbble style={{ color: 'white', fontSize: '20px', marginleft: '30px'}} />
        </a>
        </div>
        
        
        
        {/* "Read CV" button on the same line */}
        <a
          href="mailto:your-email@example.com"
          style={{
            color: '#fff',
            padding: '10px 20px',
            backgroundColor: '#7f7d7d',
            borderRadius: '40px',
            fontSize: '16px',
            marginLeft: '50px',
            fontFamily: 'poppins',
            fontWeight: '400',
            lineHeight: '100%',
            width: '100px', 
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          read cv 
        </a>
      </div>
    </div>
    </div>
  );
}
