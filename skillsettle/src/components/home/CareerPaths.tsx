import React, { useState } from "react";
import { Link } from "react-router-dom";
import { careerPaths } from "@/data/careerPaths";
import styles from "./CareerPaths.module.css";

export default function CareerPaths() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Roadmaps" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "ai-data", label: "AI & Data" },
    { id: "software-development", label: "Software Dev" },
    { id: "business", label: "Business & Management" },
    { id: "global", label: "Global Careers" },
  ];

  const filteredPaths =
    selectedFilter === "all"
      ? careerPaths
      : careerPaths.filter((p) => p.slug === selectedFilter || p.id === selectedFilter);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🧭</span>
            <span>STRUCTURED ROADMAPS</span>
          </div>
          <h2 className="text-h2">Choose Your Career Destination</h2>
          <p className="text-body-lg">
            Stop guessing what skills to learn next. Pick an industry-approved end-to-end curriculum with live mentorship, portfolio capstones, and job placement support.
          </p>
        </div>

        {/* Tab Filters */}
        <div className={styles.tabContainer} role="tablist" aria-label="Career Path Tabs">
          {filterTabs.map((tab) => {
            const count =
              tab.id === "all"
                ? careerPaths.length
                : careerPaths.filter((p) => p.slug === tab.id || p.id === tab.id).length;
            const isActive = selectedFilter === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tabBtn} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setSelectedFilter(tab.id)}
              >
                <span>{tab.label}</span>
                <span className={`${styles.countBadge} ${isActive ? styles.countBadgeActive : ""}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Career Paths Grid */}
        <div className={styles.grid}>
          {filteredPaths.map((path) => (
            <div key={path.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>{path.icon}</div>
                <div className={styles.headerInfo}>
                  <div className={styles.durationBadge}>⏳ {path.duration}</div>
                  <div className={styles.liveCohortPill}>Live Cohort</div>
                </div>
              </div>

              <h3 className={styles.title}>{path.title}</h3>
              <p className={styles.subtitle}>{path.subtitle}</p>
              <p className={styles.desc}>{path.description}</p>

              {/* Skills / Tech Stack Chips */}
              <div className={styles.skillsSection}>
                <span className={styles.sectionLabel}>Curated Tech Stack:</span>
                <div className={styles.skillsList}>
                  {path.courses.map((c, i) => (
                    <span key={i} className={styles.skillChip}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Job Roles */}
              <div className={styles.rolesSection}>
                <span className={styles.sectionLabel}>Target Job Roles & Outcomes:</span>
                <div className={styles.rolesList}>
                  {path.outcomes.map((r, i) => (
                    <span key={i} className={styles.roleTag}>
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className={styles.cardFooter}>
                <Link to={`/career-paths/${path.slug}`} className="btn btn-outline btn-sm w-full">
                  Explore Full {path.title} Track →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Customized Stack Banner */}
        <div className={styles.bottomCta}>
          <div className={styles.bottomContent}>
            <span className={styles.starIcon}>✨</span>
            <div>
              <strong>Need a customized multi-track bundle or enterprise plan?</strong>
              <p>Speak with our senior mentors for a tailor-made curriculum with scholarship credits.</p>
            </div>
          </div>
          <Link to="/career-finder" className="btn btn-teal btn-md">
            Build My Career Stack →
          </Link>
        </div>
      </div>
    </section>
  );
}
