import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import { getWhatsAppUrl } from "@/utils/constants";
import { useSEO } from "@/utils/useSEO";
import styles from "./Courses.module.css";

export default function Courses() {
  useSEO({
    title: "All Live Cohort Courses",
    description: "Browse live cohort tech programs in Cyber Security, Data Analytics, DevOps with AI, DSA, SQL, ML, Business Analysis, and IELTS with 100% placement assistance.",
    canonical: "https://skilltosettle.com/courses",
  });

  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
    const s = searchParams.get("search");
    if (s) setSearchTerm(s);
  }, [searchParams]);

  const categories = [
    { id: "all", label: "All Flagship Tracks" },
    { id: "cyber-security", label: "Cyber Security" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "data-ai", label: "Data & AI" },
    { id: "software-engineering", label: "Software Engineering" },
    { id: "business", label: "Business Analysis" },
    { id: "global", label: "Global Careers (IELTS)" },
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory =
      selectedCategory === "all" || c.categorySlug === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className="section-eyebrow teal">
              <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
            </div>
            <h1 className="text-h1">Explore Career-Ready Programs in India &amp; USA</h1>
            <p className="text-body-lg">
              Every course is engineered with live instruction, real-world portfolio capstones, and <strong>100% Placement Assistance</strong> across top tech hiring networks in <strong>India and the USA</strong>.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", margin: "14px 0 20px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#f0fdf4", color: "#166534", border: "1px solid #bbf7d0", padding: "6px 14px", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700 }}>
                <span>🎯</span>
                <span>100% PLACEMENT ASSISTANCE INCLUDED</span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#f0f9ff", color: "#0369a1", border: "1px solid #bae6fd", padding: "6px 14px", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700 }}>
                <span>🇮🇳 🇺🇸</span>
                <span>INDIA &amp; USA HIRING PARTNERS</span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#fefce8", color: "#854d0e", border: "1px solid #fef08a", padding: "6px 14px", borderRadius: "999px", fontSize: "clamp(0.7rem, 2.8vw, 0.8rem)", fontWeight: 700, maxWidth: "100%", textAlign: "center", boxSizing: "border-box" }}>
                <span>🎓</span>
                <span>COURSE COMPLETION CERTIFICATE INCLUDED</span>
              </span>
            </div>

            {/* Search Bar */}
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search by skill, technology, or role (e.g. AWS, Python, SQL, DevOps)..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className={styles.clearBtn}
                  onClick={() => setSearchTerm("")}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-sm">
        <div className="container">
          {/* Category Filter Pills */}
          <div className={styles.filterBar}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.filterBtn} ${selectedCategory === cat.id ? styles.filterActive : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className={styles.resultsInfo}>
            <span>Showing <strong>{filteredCourses.length}</strong> programs</span>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className={styles.grid}>
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3>No courses matched your query</h3>
              <p>Try searching for a different skill or clear your filter.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="btn btn-outline btn-sm mt-md"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Career Advisor Help Banner */}
          <div className={styles.helpBanner}>
            <div className={styles.helpText}>
              <h3>Not sure which program matches your target role?</h3>
              <p>Take our 2-minute career assessment or speak directly with our senior counseling team.</p>
            </div>
            <div className={styles.helpActions}>
              <Link to="/career-finder" className="btn btn-teal btn-md">
                Take Assessment →
              </Link>
              <a
                href={getWhatsAppUrl("Hi, I need help choosing the right course for my career background.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-md"
              >
                WhatsApp Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
