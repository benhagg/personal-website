import Navigation from "../components/sections/Navigation";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import EducationSection from "../components/sections/EducationSection";
import WorkExperienceSection from "../components/sections/WorkExperienceSection";
import Footer from "../components/sections/Footer";
import SvgBackground from "../components/ui/SvgBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SvgBackground />
      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-12 z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <WorkExperienceSection />
        <Footer />
      </section>
    </main>
  );
}
