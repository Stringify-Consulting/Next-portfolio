"use client";
import React, { useState, useEffect } from "react";
import { RxArrowRight } from "react-icons/rx";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./ArrowButton.module.css";

// Add prop
interface NextProjectButtonProps {
  disableMobile?: boolean;
}

const NextProjectButton: React.FC<NextProjectButtonProps> = ({ disableMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // If disableMobile is true, always render desktop view
  const shouldShowMobile = isMobile && !disableMobile;

  return (
    <div className={styles.container}>
      {shouldShowMobile ? (
        <>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuItem}>Home</div>
              <div className={styles.mobileMenuItem}>About</div>
              <div className={styles.mobileMenuItem}>Projects</div>
              <div className={styles.mobileMenuItem}>Email</div>
            </div>
          )}
        </>
      ) : (
        <div
        className={`${styles.nextProjectButton} ${disableMobile ? styles.forceDesktopMargin : ""}`}
      >
        <h1 className={styles.nextProjectText}>Next Project</h1>
        <RxArrowRight className={styles.arrowIcon} />
      </div>
      
      )}
    </div>
  );
};

export default NextProjectButton;
