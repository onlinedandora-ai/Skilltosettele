import React from "react";
import HeroSection from "@/components/home/HeroSection";
import GenZMarquee from "@/components/common/GenZMarquee";
import StatsOverview from "@/components/home/StatsOverview";
import HiringPartners from "@/components/home/HiringPartners";
import CorporateSection from "@/components/home/CorporateSection";
import PopularCourses from "@/components/home/PopularCourses";
import GoalSelector from "@/components/home/GoalSelector";
import CareerPaths from "@/components/home/CareerPaths";
import CertificateShowcase from "@/components/home/CertificateShowcase";
import RewardsSection from "@/components/home/RewardsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import HowItWorks from "@/components/home/HowItWorks";
import SuccessStoryVideo from "@/components/home/SuccessStoryVideo";
import LiveClasses from "@/components/home/LiveClasses";
import Testimonials from "@/components/home/Testimonials";
import Instructors from "@/components/home/Instructors";
import ArticlesNews from "@/components/home/ArticlesNews";
import TrustSection from "@/components/home/TrustSection";
import CareerAssessmentCTA from "@/components/home/CareerAssessmentCTA";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { useSEO } from "@/utils/useSEO";

export default function Home() {
  useSEO({
    title: "SkilltoSettle — Learn the Skill. Build the Career.",
    description: "Master in-demand tech skills with live mentor training and accredited certificates. DevOps with AI, Data Analytics, Cyber Security, DSA, and Machine Learning with 100% placement assistance.",
    canonical: "https://skilltosettle.com/",
  });

  return (
    <main>
      <HeroSection />
      <StatsOverview />
      <HiringPartners />
      <CorporateSection />
      <PopularCourses />
      <GoalSelector />
      <CareerPaths />
      <CertificateShowcase />
      <RewardsSection />
      <ProjectsSection />
      <HowItWorks />
      <SuccessStoryVideo />
      <LiveClasses />
      <Testimonials />
      <Instructors />
      <ArticlesNews />
      <TrustSection />
      <CareerAssessmentCTA />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
