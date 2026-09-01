import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import styles from "./Courses.module.css";

export default function Courses() {
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
    { id: "all", label: "All 100+ Programs" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "ai-data", label: "AI & Data Analytics" },
    { id: "business", label: "Business Analysis & Agile" },
    { id: "global", label: "Global Careers & IELTS" },
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory =
      selectedCategory === "all" || c.categorySlug === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.headerSection}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className="section-eyebrow">
              <span>📚</span> INDUSTRY-ALIGNED CATALOG
            </div>
            <h1 className="text-h1">Explore Career-Ready Programs</h1>
            <p className="text-body-lg">
              Every course is engineered with live instruction, real-world portfolio projects, and structured mentor support to help you move from learning to earning.
            </p>

            {/* Search Bar */}
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
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
              <span className={styles.noResultsIcon}>🔍</span>
              <h3>No courses matched your query</h3>
              <p>Try searching for a different skill or clear your filter.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="btn btn-outline btn-sm mt-md"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Bottom Career Advisor Help Banner */}
          <div className={styles.helpBanner}>
            <div className={styles.helpText}>
              <h3>Not sure which program matches your target role?</h3>
              <p>Take our 2-minute career quiz or speak directly with our senior counseling team.</p>
            </div>
            <div className={styles.helpActions}>
              <Link to="/career-finder" className="btn btn-teal btn-md">
                Take Career Quiz →
              </Link>
              <a
                href="https://wa.me/919999999999?text=Hi,%20I%20need%20help%20choosing%20the%20right%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-md"
              >
                💬 WhatsApp Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
