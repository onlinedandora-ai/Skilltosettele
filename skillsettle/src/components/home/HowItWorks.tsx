import React from "react";
import { Link } from "react-router-dom";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discover Your Path",
      desc: "We analyze your background, technical foundation, and career target to formulate a structured learning roadmap.",
      icon: "🎯",
    },
    {
      num: "02",
      title: "Live Expert Training",
      desc: "Learn in structured, live interactive cohorts led by senior industry professionals who work in top tech companies.",
      icon: "👨‍🏫",
    },
    {
      num: "03",
      title: "Practical Assignments",
      desc: "Reinforce daily theory with hands-on lab exercises and real query/code problem sets graded with detailed feedback.",
      icon: "📝",
    },
    {
      num: "04",
      title: "Build Real Projects",
      desc: "Create production-ready apps, dashboards, and automated pipelines that you can proudly link on your resume and GitHub.",
      icon: "🚀",
    },
    {
      num: "05",
      title: "Interview Readiness",
      desc: "Receive comprehensive resume polishing, LinkedIn optimization, and live 1-on-1 mock interviews with domain leads.",
      icon: "💼",
    },
    {
      num: "06",
      title: "Career Transformation",
      desc: "Transition into high-paying roles with confidence, verified credentials, and ongoing alumni mentorship.",
      icon: "🏆",
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🗺️</span>
            <span>THE TRANSFORMATION FUNNEL</span>
          </div>
          <h2 className="text-h2">From Learning to Career: The 6-Step Blueprint</h2>
          <p className="text-body-lg">
            We don&apos;t just sell video playlists. We run an end-to-end career transition system designed to produce proven results.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((s, idx) => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.cardHeader}>
                <span className={styles.stepNum}>{s.num}</span>
                <span className={styles.stepIcon}>{s.icon}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              {idx < steps.length - 1 && (
                <div className={styles.connectorArrow}>↓</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <h4>Ready to start your step 01?</h4>
            <p>Our advisors will review your profile and give you a free, non-pushy career assessment.</p>
          </div>
          <Link to="/career-finder" className="btn btn-primary btn-md">
            Start Free Assessment →
          </Link>
        </div>
      </div>
    </section>
  );
}
