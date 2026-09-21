import React, { useState } from "react";
import { Link } from "react-router-dom";
import { careerPaths } from "@/data/careerPaths";
import styles from "./CareerPaths.module.css";

export default function CareerPaths() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Roadmaps" },
    { id: "cloud-devops", label: "Cloud & DevOps" },
    { id: "data-analytics", label: "Data & Analytics" },
    { id: "software-development", label: "Software Dev" },
    { id: "business", label: "Business & Agile" },
    { id: "global", label: "Global Careers" },
  ];

  const filteredPaths =
    selectedFilter === "all"
      ? careerPaths
      : careerPaths.filter((p) => p.slug === selectedFilter || p.id === selectedFilter || (selectedFilter === "data-analytics" && (p.slug === "data-analytics" || p.slug === "ai-data")));

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h2 className="text-h2">Choose Your Career Destination (India &amp; USA)</h2>
          <p className="text-body-lg">
            Pick an end-to-end curriculum with live mentorship, production capstones, and <strong>100% placement assistance</strong> across hiring partners in <strong>India and the USA</strong>.
          </p>
          <div style={{ background: "rgba(0, 155, 185, 0.08)", border: "1px solid rgba(0, 155, 185, 0.2)", borderRadius: "8px", padding: "10px 16px", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "14px", fontSize: "0.86rem", color: "#0369a1", fontWeight: 600, maxWidth: "100%", boxSizing: "border-box", flexWrap: "wrap" }}>
            <span>🎓</span>
            <span>100% Placement Assistance &amp; <strong>Course Completion Certificate Included</strong> across all programs in India &amp; USA.</span>
          </div>
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
              <div className={styles.imageWrap}>
                <img
                  src={path.image}
                  alt={path.title}
                  className={styles.pathImg}
                  loading="lazy"
                />
                <div className={styles.imgOverlay}></div>
                <div className={styles.imageBadges}>
                  <div className={styles.durationBadge}>{path.duration}</div>
                  <div className={styles.liveCohortPill}>Live Cohort</div>
                </div>
              </div>

              <div className={styles.cardBody}>
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
                  <Link to={`/career-paths/${path.slug}`} className={styles.actionBtn}>
                    <span>Explore Full Track</span>
                    <span className={styles.actionArrow}>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Customized Stack Banner */}
        <div className={styles.bottomCta}>
          <div className={styles.bottomContent}>
            <div>
              <strong>Need a customized multi-track bundle or enterprise plan?</strong>
              <p>Speak with our senior mentors for a tailor-made curriculum with scholarship options.</p>
            </div>
          </div>
          <Link to="/career-finder" className="btn btn-teal btn-md">
            Career Finder →
          </Link>
        </div>
      </div>
    </section>
  );
}
