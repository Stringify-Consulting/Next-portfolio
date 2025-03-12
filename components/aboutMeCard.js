"use client"
import Image from 'next/image';
import React from 'react';
import { Bruno_Ace } from 'next/font/google'; // Import BrunoAce font

// Correct usage of the BrunoAce font
const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

export default function AboutMe() {
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
        maxWidth: '400px',
        height:'673px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a',
        borderRadius: '20px',
        border: '1px solid #9e9e9e',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        zIndex: 1,
      }}>
        <h2 className={brunoAce.className} 
          style={{ 
            fontSize: '18px',
            fontWeight: '400',
            marginBottom: '1rem',
            color: '#FFFFFF',
            lineHeight: '100%',
            letterSpacing: '-5%',
          }}>
          ABOUT ME
        </h2>
        <p style={{ 
          fontFamily: 'poppins',
          fontSize: '19px',
          marginBottom: '2.5rem',
          marginTop: '1.25rem',
          lineHeight: '28px',
          fontWeight: '400',
          letterSpacing: '0%',
          color: '#ffffff',
        }}>
          Product design is more than a career; it&apos;s the result of a lifelong passion for exploration.
          <span style={{ 
            fontFamily: 'poppins',
            fontSize: '19px',
            color: '#A2A2A2',
            lineHeight:'28px',
            fontWeight: '400',
            letterSpacing: '0%'
          }}>
            From building WordPress sites and blogging as a teen, I&apos;ve always been drawn to creating and problem-solving.
            Post-graduation, I tried data analytics and affiliate marketing, drawn by my math skills and their appeal respectively.
          </span>
          Though I found enjoyment and some success, neither provided the meaningful impact I sought.
        </p>
        <p style={{
          fontSize: '19px',
          marginBottom: '1rem',
          fontFamily: 'poppins',
          color: '#A2A2A2',
          lineHeight:'28px',
          fontWeight: '400',
          letterSpacing: '0%',
        }}>
          Driven by a strong desire to create meaningful impact, I spent considerable time searching for the right fit.
          <span style={{
            fontFamily: 'poppins',
            fontSize: '19px',
            marginBottom: '2.5rem',
            marginTop: '1.25rem',
            lineHeight:'28px',
            fontWeight: '400',
            letterSpacing: '0%',
            color: '#ffffff',
          }}>
            The turning point came with my mentor, Alex Oyebade, who suggested I investigate UX writing.
          </span>
          This sparked profound interest, leading me to discover the powerful potential of
          <span style={{
            fontFamily: 'poppins',
            fontSize: '19px',
            marginBottom: '2.5rem',
            marginTop: '1.25rem',
            lineHeight:'28px',
            fontWeight: '400',
            letterSpacing: '0%',
            color: '#ffffff',
          }}>
            product design in solving complex user and business problems.
          </span>
        </p>
      </div>
    </div>
  );
}




// "use client"
// import Image from 'next/image';
// import React from 'react';
// import { BrunoAce } from '@next/font/google';

// const BrunoAce = Bruno({
//   subsets: ['latin'],
//   weight: '400',
// }) 

// export default function AboutMe() {
//   return (
//     <div style={{ 
//         position: "relative", 
//         width: "100%",
//          height: "100vh",
//          backgroundColor: 'black',
//          display: 'grid',
//          justifyContent: 'center',
//          alignItems: 'center',
        
//          }}>
//       <Image 
//         src="/image/shine.png" 
//         alt="Background" 
//         layout="fill" 
//         objectFit="cover"
//       />
        
//       <div style={{
//         maxWidth: '400px',
//         height:'673px', 
//         margin: '0 auto', 
//         backgroundColor: '#1a1a1a', 
//         borderRadius: '20px', 
//         border: '1px solid #9e9e9e', 
//         boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         padding: '1.5rem', 
//         zIndex: 1,
//       }}>
//         <h2 className={brunoAce.variable} 
//         style={{ 
          
//           fontSize: '18px',
//           fontWeight: '400',
//            marginBottom: '1rem',
//            color: '#FFFFFF',
//            width:'118px',
//            height: '22px',
//            top: '24px',
//            left: '24px',
//            lineHeight: '100%',
//            letterSpacing: '-5%',
           
//             }}>ABOUT ME</h2>
//         <p style={{ 
//           fontFamily: 'poppins',
//           fontSize: '19px',
//           marginBottom: '2.5rem',
//           marginTop: '1.25rem',
//           lineHeight:'28px',
//           fontWeight: '400',
//           letterSpacing: '0%',
//           width: '352px',
//           color: '#ffffff',
//           }}>
    
//             Product design is more than a career; it&apos;s the result of a lifelong passion for exploration. 
      
//           <span style={{ 
//              fontFamily: 'poppins',
//              fontSize: '19px',
//             color: '#A2A2A2',
//             lineHeight:'28px',
//             fontWeight: '400',
//             letterSpacing: '0%'
//             }}>From building WordPress sites and blogging as a teen, I&apos;ve always been drawn to creating and problem-solving.
//           Post-graduation, I tried data analytics and affiliate marketing, drawn by my math skills and their appeal respectively.</span>
//             Though I found enjoyment and some success, neither provided the meaningful impact I sought. 
//         </p>
//         <p style={{
//            fontSize: '1rem',
//             marginBottom: '1rem',
//               fontFamily: 'poppins',
//               fontSize: '19px',
//              color: '#A2A2A2',
//              lineHeight:'28px',
//              fontWeight: '400',
//              letterSpacing: '0%'
//             }}>
//           Driven by a strong desire to create meaningful impact, I spent considerable time searching for the right fit.
//           <span style={{ 
//           fontFamily: 'poppins',
//           fontSize: '19px',
//           marginBottom: '2.5rem',
//           marginTop: '1.25rem',
//           lineHeight:'28px',
//           fontWeight: '400',
//           letterSpacing: '0%',
//           width: '352px',
//           color: '#ffffff',
//           }}>
//              The turning point came with my mentor, Alex Oyebade, who suggested I investigate UX writing. </span>
//           This sparked profound interest, leading me to discover the powerful potential of 
//           <span style={{ 
//           fontFamily: 'poppins',
//           fontSize: '19px',
//           marginBottom: '2.5rem',
//           marginTop: '1.25rem',
//           lineHeight:'28px',
//           fontWeight: '400',
//           letterSpacing: '0%',
//           width: '352px',
//           color: '#ffffff',
//           }}> product design in solving complex user and business problems. </span>
//         </p>
//       </div>
//     </div>
//   );
// }
