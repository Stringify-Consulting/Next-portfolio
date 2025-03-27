"use client";

import HeroSection from "../components/HeroSection";
import Image from "next/image";
import styles from "./page.module.css";
import ProblemSolution from "../components/ProblemSolution";
import ClientOverview from "../components/ClientOverview";
import Storyboarding from "../components/StoryBoarding";
import TargetAudience from "../components/TargetAudience";
import MyQuraClient from "../components/MyQuraClient";
import MyQuraCareProfessional from "../components/MqcProfessional";
import AdminPortal from "../components/AdminPortal";
import NextProject from "../components/NextPage";
import Sidebar from "@/Next-portfolio/components/SliderBar";
import ToggleButton from "@/Next-portfolio/components/ToggleButton"; 
import NextProjectButton from "@/Next-portfolio/components/ArrowButton";
import ThankYouFooter from "../components/ThankYouFooter";

export default function CaseStudyPage() {
  return (
    <div
      className={styles.pageContainer}
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: "0",
        padding: "40px 16px",
        backgroundColor: "#000000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      /* Background Image */
        <Image
          src="/assets/image.png"
          alt="Background"
          fill
          className={styles.bgImage} 
        priority
      />

      {/* Sidebar */}
      <Sidebar />

      <div className={styles.rowContainer}>
        <div className={styles.leftspace}></div>
        <div className={styles.buttonContainer}>
        <div className={styles.centerToggle}>
          <ToggleButton />
        </div>
        <div>
          <NextProjectButton />
        </div>
        </div>
      </div>

      <HeroSection />
      <ClientOverview />
      <ProblemSolution />
      <Storyboarding />
      <TargetAudience />
      <MyQuraClient />
      <MyQuraCareProfessional />
      <AdminPortal />
      <NextProject />
      <ThankYouFooter />
    </div>
  );
}
