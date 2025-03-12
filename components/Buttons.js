"use client"
import React, { useState } from 'react';
import { RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri';  // Import both icons

const ButtonWithIcon = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false); // State to track if the email was copied

  // Function to copy the email to clipboard
  const handleCopyClick = (e) => {
    e.stopPropagation();  // Prevent the parent click handler from firing
    navigator.clipboard.writeText(email) // Copy email to clipboard
      .then(() => {
        setIsCopied(true); // Set state to indicate the email is copied
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
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
        backgroundColor: '#000000',  // Black background for the button
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',  // Align the icon with the text
        justifyContent: 'center',  // Center the content
        gap: '10px',  // Space between the email text and the icon
        width: 'auto',  // Adjust width as needed
        transition: 'all 0.3s ease',  // Smooth transition for resizing
        position: 'relative',
        zIndex: 1,
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundClip: 'padding-box',
        border: '4px solid transparent', // Transparent border to show the moving gradient
        animation: 'gradientMovement 4s linear infinite', // Apply the moving yellow gradient animation
        cursor: 'pointer', // Pointer cursor to indicate it's clickable
      }}
      className="responsive-button"
    >
      {email}
      {/* Show the copied status and change the icon on click */}
      <div
        onClick={handleCopyClick} // Handle click on the copy icon to copy the email
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




