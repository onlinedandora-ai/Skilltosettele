import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsOverview from "@/components/home/StatsOverview";
import CorporateSection from "@/components/home/CorporateSection";
import PopularCourses from "@/components/home/PopularCourses";
import GoalSelector from "@/components/home/GoalSelector";
import CareerPaths from "@/components/home/CareerPaths";
import RewardsSection from "@/components/home/RewardsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import HowItWorks from "@/components/home/HowItWorks";
import LiveClasses from "@/components/home/LiveClasses";
import Testimonials from "@/components/home/Testimonials";
import Instructors from "@/components/home/Instructors";
import TrustSection from "@/components/home/TrustSection";
import CareerAssessmentCTA from "@/components/home/CareerAssessmentCTA";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsOverview />
      <CorporateSection />
      <PopularCourses />
      <GoalSelector />
      <CareerPaths />
      <RewardsSection />
      <ProjectsSection />
      <HowItWorks />
      <LiveClasses />
      <Testimonials />
      <Instructors />
      <TrustSection />
      <CareerAssessmentCTA />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
