"use client";
import React, { useState } from 'react';
import { RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri';  

// Define email prop type as string
interface ButtonWithIconProps {
  email: string;  
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ email }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false); 

  // Function to copy the email to clipboard
  const handleCopyClick = (e: React.MouseEvent) => {
    e.stopPropagation();  
    navigator.clipboard.writeText(email) 
      .then(() => {
        setIsCopied(true); 
        setTimeout(() => setIsCopied(false), 2000); 
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div
      style={{
        color: '#FFFFFF',
        fontSize: '18px',
        textDecoration: 'none',
        padding: '12px 24px',
        backgroundColor: '#000000',  
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',  
        justifyContent: 'center',  
        gap: '10px',  
        width: 'auto',  
        transition: 'all 0.3s ease',  
        position: 'relative',
        zIndex: 1,
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundClip: 'padding-box',
        border: '4px solid transparent', 
        animation: 'gradientMovement 4s linear infinite', 
        cursor: 'pointer', 
      }}
      className="responsive-button"
    >
      {email}
      {/* Show the copied status and change the icon on click */}
      <div
        onClick={handleCopyClick} 
        style={{ cursor: 'pointer' }}
      >
        {isCopied ? (
          <RiFileCopyFill style={{ color: '#FFFFFF', fontSize: '20px' }} />
        ) : (
          <RiFileCopyLine style={{ color: '#FFFFFF', fontSize: '20px' }} />
        )}
      </div>
      {/* Show "Copied" message temporarily */}
      {isCopied && (
        <span style={{ color: '#FFFFFF', fontSize: '14px', marginLeft: '10px' }}>
          Copied!
        </span>
      )}
    </div>
  );
};

export default ButtonWithIcon;
