import React from "react";
import { Link } from "react-router-dom";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: "🧭",
      accent: "#0284c7",
      title: "Discover Your Path",
      desc: "We review your background, current skills, and target roles to create a practical, structured learning roadmap.",
    },
    {
      num: "02",
      icon: "💻",
      accent: "#009bb9",
      title: "Live Expert Training",
      desc: "Learn in interactive live cohorts led by senior engineers and leads currently working at top tech firms.",
    },
    {
      num: "03",
      icon: "🧪",
      accent: "#f59e0b",
      title: "Practical Assignments",
      desc: "Reinforce daily theory with hands-on lab exercises and real problem sets reviewed with detailed feedback.",
    },
    {
      num: "04",
      icon: "🚀",
      accent: "#10b981",
      title: "Build Real Projects",
      desc: "Create production-ready pipelines, databases, and applications you can link directly on your resume and GitHub.",
    },
    {
      num: "05",
      icon: "🎯",
      accent: "#8b5cf6",
      title: "Interview Readiness",
      desc: "Receive resume polishing, LinkedIn optimization, and realistic 1-on-1 mock interviews with domain mentors.",
    },
    {
      num: "06",
      icon: "🏆",
      accent: "#ec4899",
      title: "Career Transformation",
      desc: "Transition into tech roles with confidence, verified portfolio projects, and ongoing alumni network support.",
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>LEARNING TO CAREER PROCESS</span>
          </div>
          <h2 className="text-h2">From Learning to Career: The 6-Step Blueprint</h2>
          <p className="text-body-lg">
            We run an end-to-end career transition system designed to produce proven, repeatable results.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((s, idx) => (
            <div key={s.num} className={styles.stepCard} style={{ borderTop: `3px solid ${s.accent}` }}>
              <div className={styles.cardHeader}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${s.accent}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                  {s.icon}
                </div>
                <span className={styles.stepNum} style={{ color: s.accent }}>{s.num}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              {idx < steps.length - 1 && (
                <div className={styles.connectorArrow}>→</div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <div className={styles.ctaText}>
            <h4>Ready to start your journey?</h4>
            <p>Our mentors will review your profile and give you free, practical career guidance.</p>
          </div>
          <Link to="/career-finder" className="btn btn-primary btn-md">
            Start Assessment →
          </Link>
        </div>
      </div>
    </section>
  );
}
