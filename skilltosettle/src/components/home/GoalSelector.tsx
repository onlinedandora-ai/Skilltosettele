import React from "react";
import { Link } from "react-router-dom";
import styles from "./GoalSelector.module.css";

export default function GoalSelector() {
  const goals = [
    {
      id: "first-job",
      title: "Start First Tech Job",
      desc: "For college graduates & beginners wanting structured 0-to-1 training, mentor code reviews, and entry-level interview placement prep.",
      badge: "Beginner Friendly",
      badgeType: "teal",
      hike: "₹6–10 LPA Starting",
      path: "/career-finder?goal=first-job",
      tags: ["Full Stack", "Data Analyst", "Python Core"],
    },
    {
      id: "switch",
      title: "Switch Careers Into Tech",
      desc: "For non-tech, operations, or support professionals moving into Cloud, DevOps, or Data Engineering with weekend-friendly live cohorts.",
      badge: "High Transition Rate",
      badgeType: "orange",
      hike: "+85% Salary Hike",
      path: "/career-finder?goal=switch",
      tags: ["DevOps", "Power BI", "Cloud Architect"],
    },
    {
      id: "promotion",
      title: "Upskill For Senior Roles",
      desc: "For mid-level engineers looking to master advanced cloud architectures, Kubernetes orchestration, and System Design for lead roles.",
      badge: "Career Growth",
      badgeType: "accent",
      hike: "₹18–35 LPA Tier",
      path: "/career-finder?goal=grow",
      tags: ["Kubernetes", "CI/CD", "Microservices"],
    },
    {
      id: "global",
      title: "Global Careers & IELTS",
      desc: "Comprehensive preparation for overseas tech employment, global remote opportunities, and 7.5+ IELTS Band score.",
      badge: "Global Ready",
      badgeType: "coral",
      hike: "USA / UK / Canada / EU",
      path: "/career-finder?goal=global",
      tags: ["IELTS 7.5+", "Tech Communication", "Remote Roles"],
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h2 className="text-h2">What Is Your Core Career Objective?</h2>
          <p className="text-body-lg">
            Select your goal and we will map out a clear, job-ready learning plan with <strong>100% Placement Assistance</strong> across <strong>India and the USA</strong>.
          </p>
          <div className={styles.certNoticeBadge}>
            <span>🎓</span>
            <span>COURSE COMPLETION CERTIFICATE INCLUDED ACROSS ALL TRACKS</span>
          </div>
        </div>

        <div className={styles.grid}>
          {goals.map((g) => (
            <Link key={g.id} to={g.path} className={styles.card}>
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardTop}>
                <span className={`${styles.badge} ${styles[g.badgeType]}`}>
                  {g.badge}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{g.title}</h3>
              <p className={styles.cardDesc}>{g.desc}</p>

              {/* Tags & Salary Metric */}
              <div className={styles.metricRow}>
                <div className={styles.salaryTag}>
                  <span className={styles.salaryDot}></span>
                  <span>{g.hike}</span>
                </div>
              </div>

              <div className={styles.tagsRow}>
                {g.tags.map((t, idx) => (
                  <span key={idx} className={styles.tagItem}>{t}</span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.ctaText}>Get Recommended Roadmap →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 2-Min Career Quiz Lead In */}
        <div className={styles.quizBanner}>
          <div className={styles.quizContent}>
            <div className={styles.quizIconWrap}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div>
              <h4 className={styles.quizTitle}>Unsure which path matches your background?</h4>
              <p className={styles.quizDesc}>
                Take our quick 2-minute Career Assessment for a personalized skill roadmap and batch recommendations from senior counselors.
              </p>
            </div>
          </div>
          <Link to="/career-finder" className="btn btn-teal btn-md">
            Take Assessment →
          </Link>
        </div>
      </div>
    </section>
  );
}
