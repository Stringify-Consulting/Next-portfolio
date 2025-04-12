"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Poppins, Bruno_Ace, } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});

type ProjectCardDefaultProps = {
  title: string;
  description: string;
  highlightedText: string;
  image: string;
  hoverImage: string;
  year: string;
  logo: string;
  hoverLogo: string;
  defaultUpperRectBg: string;
  hoverUpperRectBg: string;
  hoverLowerTextColor: string;
};

const ProjectCardDefault: React.FC<ProjectCardDefaultProps> = ({
  title,
  description,
  highlightedText,
  image,
  hoverImage,
  year,
  logo,
  hoverLogo,
  defaultUpperRectBg,
  hoverUpperRectBg,
  hoverLowerTextColor,
}) => {
  const defaultLowerTextColor = "#ffffff";
  const [upperBg, setUpperBg] = useState(defaultUpperRectBg);
  const [currentImage, setCurrentImage] = useState(image);
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [lowerTextColor, setLowerTextColor] = useState(defaultLowerTextColor);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{
        width: '100%',
        maxWidth: '408px',
        border: '1px solid #2C2C2C',
        borderRadius: '20px',
        padding: '8px',
        backgroundColor: '#0D0D0D',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box' // Ensure padding is included in width
      }}
      whileHover={{ 
        scale: 1.03, // Slight expansion on hover
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentImage(hoverImage);
        setCurrentLogo(hoverLogo);
        setUpperBg(hoverUpperRectBg);
        setLowerTextColor(hoverLowerTextColor);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImage(image);
        setCurrentLogo(logo);
        setUpperBg(defaultUpperRectBg);
        setLowerTextColor(defaultLowerTextColor);
      }}
    >
      {/* Main container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
        boxSizing: 'border-box',
        backgroundImage: isHovered ? 'none' : 'url(/assets/image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Upper Rectangle - now properly constrained */}
        <div
          style={{
            width: 'calc(100% - 2px)', // Account for border
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            justifyContent: 'space-between',
            height: '48px',
            border: '1px solid #2C2C2C',
            background: upperBg,
            boxSizing: 'border-box',
            margin: '0 auto' // Center within container
          }}
        >
          <h2 style={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 400,
            fontSize: '16px',
            color: '#FFFFFF',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 'calc(100% - 60px)'
          }}>
            {title}
          </h2>
          <span style={{
            fontFamily: brunoAce.style.fontFamily,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '100%',
            letterSpacing: '-0.05em',
            color: '#A4A4A4',
            flexShrink: 0
          }}>
            {year}
          </span>
        </div>
        
        {/* Lower Rectangle */}
        <div style={{
          width: '100%',
          aspectRatio: '4/4.5',
          borderRadius: '8px',
          border: '1px solid #2C2C2C',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}>
          {/* Logo */}
          <img
            src={currentLogo}
            alt="logo"
            style={{
              width: '32px',
              height: '32px',
              position: 'absolute',
              top: '16px',
              left: '16px',
              zIndex: 2
            }}
          />
          
          {/* Main Image */}
          <img
            src={currentImage}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          
          {/* Text Container */}
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            textAlign: 'left',
            zIndex: 2
          }}>
            <h3 style={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '24px',
              marginBottom: '8px',
              marginTop: 0,
              color: lowerTextColor
            }}>
              {description}
            </h3>
            <p style={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '20px',
              lineHeight: '24px',
              margin: 0,
              color: lowerTextColor
            }}>
              {highlightedText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardDefault;