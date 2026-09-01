import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Pages
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import CareerPaths from "@/pages/CareerPaths";
import CareerPathDetail from "@/pages/CareerPathDetail";
import LiveClasses from "@/pages/LiveClasses";
import CareerFinder from "@/pages/CareerFinder";
import SuccessStories from "@/pages/SuccessStories";
import Corporate from "@/pages/Corporate";
import Instructors from "@/pages/Instructors";
import Contact from "@/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="/career-paths/:slug" element={<CareerPathDetail />} />
            <Route path="/live-classes" element={<LiveClasses />} />
            <Route path="/career-finder" element={<CareerFinder />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
