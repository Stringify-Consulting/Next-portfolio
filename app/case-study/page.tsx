"use client";

import HeroSection from "../../components/HeroSection";
import Image from "next/image";
import styles from "./page.module.css";
import ProblemSolution from "../../components/ProblemSolution";
import ClientOverview from "../../components/ClientOverview";
import Storyboarding from "../../components/StoryBoarding";
import TargetAudience from "../../components/TargetAudience";
import MyQuraClient from "../../components/MyQuraClient";
import MyQuraCareProfessional from "../../components/MqcProfessional";
import AdminPortal from "../../components/AdminPortal";
import ThankYouFooter from "@/components/ThankYouCard";
import Sidebar from "@/components/SliderBar";
import ToggleButton from "@/components/ToggleButton"; 
import NextProjectButton from "@/components/ArrowButton";
import ProjectCard from "@/components/ProductCard";

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
        <Image
          src="/assets/image.png"
          alt="Background"
          fill
          className={styles.bgImage} 
        priority
      />

      {/* Sidebar */}
      <Sidebar />

      <div className={styles.navigationContainer}>
  <div className={styles.togglePosition}>
    <ToggleButton />
  </div>
  <div className={styles.nextProjectPosition}>
    <NextProjectButton />
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
      <ProjectCard />
      <ThankYouFooter />
    </div>
  );
}
