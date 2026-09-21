import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import styles from "./PopularCourses.module.css";

export default function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Flagship Tracks" },
    { id: "cyber-security", label: "Cyber Security" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "data-ai", label: "Data & AI" },
    { id: "software-engineering", label: "Software Engineering" },
    { id: "business", label: "Business Analysis" },
    { id: "global", label: "Global Careers (IELTS)" },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((c) => c.categorySlug === selectedCategory);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Top Categories heading */}
        <div className={styles.topCategoriesHeader}>
          <h2 className={styles.topCategoriesTitle}>Top Categories</h2>
        </div>

        {/* Top Online Courses Banner Bar with All Course Pill */}
        <div className={styles.coursesBannerBar}>
          <h3 className={styles.bannerBarTitle}>Top Online Courses • Course Completion Certificate Included • 100% Placement Assistance (India &amp; USA)</h3>
          <Link to="/courses" className={styles.allCourseBtn}>
            All Courses →
          </Link>
        </div>

        {/* Category Tabs with Counts */}
        <div className={styles.tabBar} role="tablist" aria-label="Course Category Tabs">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? courses.length
                : courses.filter(
                    (c) =>
                      c.categorySlug === cat.id ||
                      (cat.id === "global" && (c.categorySlug === "global" || c.categorySlug === "languages"))
                  ).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tabBtn} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={`${styles.countBadge} ${isActive ? styles.countBadgeActive : ""}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Courses Grid - Animated Staggered Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className={styles.grid}
          >
            {filteredCourses.slice(0, 4).map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Remaining Courses Announcement Card */}
        <div className={styles.coursePageNotice}>
          <div className={styles.noticeContent}>
            <span className={styles.noticeBadge}>8+ FULL PROGRAMS AVAILABLE</span>
            <h4 className={styles.noticeTitle}>
              Looking for SQL, Machine Learning, Business Analyst, or IELTS?
            </h4>
            <p className={styles.noticeText}>
              All 8 specialized career tracks with <strong>100% Placement Assistance (India &amp; USA)</strong> and live mentoring are available on our dedicated Courses page.
            </p>
          </div>
          <Link to="/courses" className={styles.noticeBtn}>
            All Courses →
          </Link>
        </div>

        {/* Explore All CTA */}
        <div className={styles.exploreCta}>
          <Link to="/courses" className="btn btn-outline btn-lg">
            Explore Courses →
          </Link>
        </div>
      </div>
    </section>
  );
}
