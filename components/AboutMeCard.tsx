"use client";
import { Bruno_Ace } from 'next/font/google'; 

// Correct usage of the BrunoAce font
const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
});

const AboutMe: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: '400px',
        height: '673px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a',
        borderRadius: '20px',
        border: '1px solid #9e9e9e',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        zIndex: 1,
      }}
    >
      <h2
        className={brunoAce.className}
        style={{
          fontSize: '18px',
          fontWeight: '400',
          marginBottom: '1rem',
          color: '#FFFFFF',
          lineHeight: '100%',
          letterSpacing: '-5%',
        }}
      >
        ABOUT ME
      </h2>
      <p
        style={{
          fontFamily: 'poppins',
          fontSize: '19px',
          marginBottom: '2.5rem',
          marginTop: '1.25rem',
          lineHeight: '28px',
          fontWeight: '400',
          letterSpacing: '0%',
          color: '#ffffff',
        }}
      >
        Product design is more than a career; it&apos;s the result of a lifelong passion for exploration.
        <span
          style={{
            fontFamily: 'poppins',
            fontSize: '19px',
            color: '#A2A2A2',
            lineHeight: '28px',
            fontWeight: '400',
            letterSpacing: '0%',
          }}
        >
          From building WordPress sites and blogging as a teen, I&apos;ve always been drawn to creating and problem-solving.
          Post-graduation, I tried data analytics and affiliate marketing, drawn by my math skills and their appeal respectively.
        </span>
        Though I found enjoyment and some success, neither provided the meaningful impact I sought.
      </p>
      <p
        style={{
          fontSize: '19px',
          marginBottom: '1rem',
          fontFamily: 'poppins',
          color: '#A2A2A2',
          lineHeight: '28px',
          fontWeight: '400',
          letterSpacing: '0%',
        }}
      >
        Driven by a strong desire to create meaningful impact, I spent considerable time searching for the right fit.
        <span
          style={{
            fontFamily: 'poppins',
            fontSize: '19px',
            marginBottom: '2.5rem',
            marginTop: '1.25rem',
            lineHeight: '28px',
            fontWeight: '400',
            letterSpacing: '0%',
            color: '#ffffff',
          }}
        >
          The turning point came with my mentor, Alex Oyebade, who suggested I investigate UX writing.
        </span>
        This sparked profound interest, leading me to discover the powerful potential of
        <span
          style={{
            fontFamily: 'poppins',
            fontSize: '19px',
            marginBottom: '2.5rem',
            marginTop: '1.25rem',
            lineHeight: '28px',
            fontWeight: '400',
            letterSpacing: '0%',
            color: '#ffffff',
          }}
        >
          product design in solving complex user and business problems.
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
