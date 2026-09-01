import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import styles from "./PopularCourses.module.css";

export default function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "ai-data", label: "AI & Data Science" },
    { id: "business", label: "Business & Agile" },
    { id: "global", label: "Global & IELTS" },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter(
          (c) =>
            c.categorySlug === selectedCategory ||
            (selectedCategory === "global" && (c.categorySlug === "global" || c.categorySlug === "languages"))
        );

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        {/* Top Categories heading */}
        <div className={styles.topCategoriesHeader}>
          <h2 className={styles.topCategoriesTitle}>Top Categories</h2>
        </div>

        {/* Top Online Courses Banner Bar with All Course Pill */}
        <div className={styles.coursesBannerBar}>
          <h3 className={styles.bannerBarTitle}>Top Online Courses</h3>
          <Link to="/courses" className={styles.allCourseBtn}>
            All Course
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

        {/* Courses Grid */}
        <div className={styles.grid}>
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Explore All CTA */}
        <div className={styles.exploreCta}>
          <Link to="/courses" className="btn btn-outline btn-lg">
            <span>📚</span> View All 100+ Syllabi & Cohort Schedules →
          </Link>
        </div>
      </div>
    </section>
  );
}
