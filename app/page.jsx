import ProficientAreas from "./components/proficient-areas.jsx";
import RecentProjectSection from "./components/recentProjectCards.jsx";
import AboutMe from "./components/aboutMeSection.jsx";

export default function Home() {
  return (
    <div className="p-5 pt-4 bg-[#090707] text-center text-white">
    
    <RecentProjectSection />
    <ProficientAreas />
    <AboutMe />

    </div>
  
  );
}
