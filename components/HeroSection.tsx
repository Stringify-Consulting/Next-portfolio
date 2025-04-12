import Image from "next/image";

export default function HeroSection() {
  return (
    <div style={styles.hero}>
      <Image
        src="/assets/MCA LOGO SVG.png"
        alt="MyCare Assistant Logo"
        width={96}
        height={96}
        style={styles.logo}
      />
      <p style={styles.subtitle}>MYCARE ASSISTANT (MYQURA) - 2024</p>
      <h1 style={styles.title}>Care Service App for</h1>
      <h2 style={styles.italicTitle}>Care Professionals & Patients</h2>
      <Image
        src="/assets/Scene18.png"
        alt="Care Service App"
        width={1272}
        height={705}
        style={styles.heroImage}
      />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "5vw 5vw", 
  },
  logo: {
    width: "96px",
    height: "96px",
    objectFit: "cover",
  },
  subtitle: {
    fontSize: "1rem", 
    fontWeight: 600,
    color: "#A4A4A4",
    marginTop: "20px",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 5rem)", 
    fontWeight: "bold",
    color: "white",
    margin: "0",
    lineHeight: "1.2", 
  },
  italicTitle: {
    fontSize: "clamp(2rem, 5vw, 5rem)", 
    fontStyle: "italic",
    color: "white",
    lineHeight: "1.2",
    margin: "0",
  },
  heroImage: {
    width: "100%", 
    maxWidth: "1272px", 
    height: "auto", 
    borderRadius: "32px",
    marginTop: "50px",
  },
};

// Responsive Media Queries
const responsiveStyles = `
  @media (max-width: 1024px) {
    ${styles.hero.padding} = "8vw 5vw"; 
    ${styles.title.fontSize} = "clamp(1.8rem, 4vw, 4rem)";
    ${styles.italicTitle.fontSize} = "clamp(1.8rem, 4vw, 4rem)";
  }

  @media (max-width: 768px) {
    ${styles.hero.padding} = "10vw 5vw";
    ${styles.title.fontSize} = "clamp(1.5rem, 3.5vw, 3.5rem)";
    ${styles.italicTitle.fontSize} = "clamp(1.5rem, 3.5vw, 3.5rem)";
    ${styles.heroImage.borderRadius} = "16px"; // Reduce border radius on smaller screens
  }

  @media (max-width: 480px) {
    ${styles.hero.padding} = "12vw 4vw";
    ${styles.title.fontSize} = "clamp(1.2rem, 3vw, 3rem)";
    ${styles.italicTitle.fontSize} = "clamp(1.2rem, 3vw, 3rem)";
    ${styles.subtitle.fontSize} = "0.875rem";
  }
`;

// Inject styles into a <style> tag in the document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = responsiveStyles;
  document.head.appendChild(styleSheet);
}


