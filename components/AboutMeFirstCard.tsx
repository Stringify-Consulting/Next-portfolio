"use client";
import { FaLinkedin, FaDribbble, FaXTwitter } from 'react-icons/fa6';

const AboutMeCard: React.FC = () => {
  return (
    
      <div style={{
        backgroundColor: '#1a1a1a', 
        borderRadius: '25px',
        width: '400px',  
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        border: '1px solid #9e9e9e',
        height: '336px',
        paddingLeft: '30px',
        paddingRight: '30px',
        zIndex: -1,
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
          alignItems: 'center', 
          gap: '30px',
        }}>
          {/* Twitter Icon */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#444343',
            width: '32px',
            height: '32px',
            border: '1px solid #9e9e9e',
            borderRadius: '20px',
          }}>
            <a href="https://x.com/lajimohofficial" target="_blank" rel="noopener noreferrer">
              <FaXTwitter style={{ color: 'white', fontSize: '20px' }} />
            </a>
          </div>

          {/* LinkedIn Icon */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#444343',
            width: '32px',
            height: '32px',
            border: '1px solid #9e9e9e',
            borderRadius: '20px',
          }}>
            <a href="https://www.linkedin.com/in/lawal-jimoh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ color: 'white', fontSize: '20px' }} />
            </a>
          </div>

          {/* Dribbble Icon */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#444343',
            width: '32px',
            height: '32px',
            border: '1px solid #9e9e9e',
            borderRadius: '20px',
          }}>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
              <FaDribbble style={{ color: 'white', fontSize: '20px' }} />
            </a>
          </div>

          {/* "Read CV" button */}
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
  );
};

export default AboutMeCard;
