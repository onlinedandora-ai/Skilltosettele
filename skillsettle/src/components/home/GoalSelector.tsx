import React from "react";
import { Link } from "react-router-dom";
import styles from "./GoalSelector.module.css";

export default function GoalSelector() {
  const goals = [
    {
      id: "first-job",
      icon: "🚀",
      title: "Start First Tech Job",
      desc: "For college grads & beginners wanting structured 0-to-1 training, mentor code reviews, and entry-level interview placement prep.",
      badge: "Zero Coding Required",
      badgeType: "teal",
      hike: "₹6–10 LPA Starting",
      path: "/career-finder?goal=first-job",
      tags: ["Full Stack", "Data Analyst", "Python Core"],
    },
    {
      id: "switch",
      icon: "⚡",
      title: "Switch Careers Into Tech",
      desc: "For non-tech, operations, or support pros moving into Cloud, DevOps, or Data Engineering with weekend-friendly live cohorts.",
      badge: "Highest Transition Rate",
      badgeType: "orange",
      hike: "+85% Salary Hike",
      path: "/career-finder?goal=switch",
      tags: ["DevOps + AI", "Power BI", "Cloud Architect"],
    },
    {
      id: "promotion",
      icon: "📈",
      title: "Upskill For Senior Promotions",
      desc: "For mid-level engineers looking to master Generative AI, Kubernetes orchestration, and System Architecture for lead roles.",
      badge: "High Growth",
      badgeType: "accent",
      hike: "₹18–35 LPA Tier",
      path: "/career-finder?goal=grow",
      tags: ["GenAI", "ArgoCD", "Microservices"],
    },
    {
      id: "global",
      icon: "🌍",
      title: "Global Careers & IELTS",
      desc: "Comprehensive preparation for overseas tech employment, immigration points, global remote gigs, and 7.5+ IELTS Band score.",
      badge: "Global Visa Ready",
      badgeType: "coral",
      hike: "UK / Canada / EU / US",
      path: "/career-finder?goal=global",
      tags: ["IELTS 7+", "Global Tech Comms", "Remote Work"],
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🎯</span>
            <span>STRUCTURED CAREER PATHWAYS</span>
          </div>
          <h2 className="text-h2">What Is Your Core Career Objective?</h2>
          <p className="text-body-lg">
            Skip the trial and error. Select where you want to go, and we will build you a personalized, job-ready roadmap with live classes.
          </p>
        </div>

        <div className={styles.grid}>
          {goals.map((g) => (
            <Link key={g.id} to={g.path} className={styles.card}>
              <div className={styles.cardGlow}></div>
              
              <div className={styles.cardTop}>
                <span className={styles.icon}>{g.icon}</span>
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
                <span className={styles.ctaText}>Get My Recommended Roadmap →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 2-Min Career Quiz Lead In */}
        <div className={styles.quizBanner}>
          <div className={styles.quizContent}>
            <div className={styles.quizIconWrap}>💡</div>
            <div>
              <h4 className={styles.quizTitle}>Unsure which path matches your background?</h4>
              <p className={styles.quizDesc}>
                Take our fast 2-minute Career Assessment Quiz for a free personalized skill roadmap and batch recommendations.
              </p>
            </div>
          </div>
          <Link to="/career-finder" className="btn btn-teal btn-md">
            <span>🎯</span> Take 2-Min Career Quiz →
          </Link>
        </div>
      </div>
    </section>
  );
}
