"use client"
import React from 'react';
// import { RiFileCopyLine } from "react-icons/ri";
import Image from 'next/image';
import ButtonWithIcon from '../components/Buttons';



export default function WorkTogether() {
//   const copyToClipboard = () => {
//     const email = "lajimohofficial@gmail.com";  // The email address to be copied
//     navigator.clipboard.writeText(email)
//       .then(() => {
//         alert('Email address copied to clipboard!');
//       })
//       .catch((err) => {
//         alert('Failed to copy email address: ', err);
//       });
//   };

  return (
    <div style={{ 
    position: "relative", 
    width: "100%",
     height: "100vh",
     backgroundColor: 'black',
     display: 'grid',
     justifyContent: 'center',
     alignItems: 'center' 
     }}>
  <Image 
    src="/image/shine.png" 
    alt="Background" 
    layout="fill" 
    objectFit="cover"
  />
    <div style={{
      backgroundColor: 'rgba(174, 174, 174, 0.2)',  // Ash color
      padding: '20px',
      margin: '0 auto',  // Centers the div
      width: '1272px',  // 75% of the page width
      height: '479px',  // 70% of the viewport height
      borderRadius: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',  // Centers content inside the div
      flexShrink: '0',
      top: '355px',
      zIndex: '1'
      
    }}>
      {/* Image Section (takes 40% of the div) */}
      <div style={{
         zIndex: 1,
        flex: '0 0 40%',  // 40% width for the image section
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #3B3B3B',
        height: '439px',
        borderRadius: '24px',
        top: '8px',
        left: '22px',
        backgroundColor: 'rgba(30, 30, 30, 1.0)',
      }}>
        <Image style={{
            zIndex: 1,
            top: '8px',
            left: '22px',
            bottom: '20px',
          }}
          src="/image/image.png" 
          alt="Profile"
          width={376}
           height={439}
          
        /> 

      </div>

      {/* Text and Button Section (takes 60% of the div) */}
      <div style={{
        flex: '0 0 60%',  // 60% width for the text and button section
        paddingLeft: '20px',
      }}>
        <p style={{
          color: 'black',
          fontFamily: 'poppins',
            fontSize: '52px', 
            fontWeight: '500',
             fontStyle: 'normal',
              lineHeight: '100%',
          marginBottom: '10px',
          marginLeft: '50px',
          left: '548px',
          top: '122px',
          zIndex: '1'
        
        }}>
          Let’s <span style={{color: '#ffffff',
             fontFamily: 'poppins',
              textedge: 'cap',
               fontSize: '52px', 
               fontWeight: '500',
                fontStyle: 'normal',
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 
                  }}>
                     work 
                     </span> together on your
        </p>
        <p style={{
          marginBottom: '40px',
        }}>
           <span style={{color: '#ffffff',
             fontFamily: 'poppins',
              textedge: 'both',
               fontSize: '42px', 
               fontWeight: '500',
                fontStyle: 'normal',
                 lineHeight: 'normal',
                 marginLeft: '50px',
                  }}> next project </span>
        </p>
         <div style={{
           paddingTop: '20px',
           paddingRight: '32px',
           paddingBottom: '20px',
           paddingLeft: '32px',
           marginRight: '150px',
           marginLeft: '50px',
           borderRadius: '70px',
           padding: '15px 28px',
          
        }}>
       {/* <a
          href=" "
          style={{
            color: '#FFFFFF',
            fontSize: '20px',
            
            
           
            
            display: 'flex',
            alignItems: 'center',  // Align the icon with the text
            justifyContent: 'center',  // Center the content
             gap: '12px',  // Space between the email text and the icon
            width: 'hug(642px)',
            hieight: 'hug(76px)',
            top: '286px',
            left: '548px',
           
           
          }}
        >
         <span style={{
            color: '#FFFFFF',  // White color for the icon
            fontSize: '32px',  // Icon size
            font: 'poppins',
            fontWeight: '400',
            verticalTrim: 'cap height',
            lineHeight: '100%',
            zIndex: 1,
            
          }} > lajimohofficial@gmail.com </span> 
          <div style={{
            width: 'hug(36px)',
            height: 'hug(36px)',
            radius: '36px',
            padding: '8px',
            gap: '8px',
            zIndex: 1,
            
          }}>
            <RiFileCopyLine style={{
              width: '20px',
              height: '20px',
              zIndex: 1,
            }}
          onClick={copyToClipboard} /> </div>
        </a> */}
       <ButtonWithIcon 
  email="lajimohofficial@gmail.com"
  
/>
        </div>
        </div>
      </div>
      </div>
  );
};
