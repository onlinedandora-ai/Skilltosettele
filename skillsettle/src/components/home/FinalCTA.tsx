import React from "react";
import { Link } from "react-router-dom";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glowTop}></div>
          <div className={styles.glowBottom}></div>

          <div className={styles.content}>
            <div className="section-eyebrow orange">
              <span>🚀</span>
              <span>YOUR CAREER TRANSFORMATION STARTS TODAY</span>
            </div>

            <h2 className={styles.title}>
              Don&apos;t Let Another Year Pass <br />
              <span className="text-gradient-warm">Without Upskilling.</span>
            </h2>

            <p className={styles.desc}>
              Join over 1,000+ ambitious developers, analysts, and career changers who secured 85%+ salary hikes with Skillsettle live mentorship and real-world capstone projects.
            </p>

            <div className={styles.ctaRow}>
              <Link to="/career-finder" className="btn btn-warm btn-lg">
                <span>🎯</span> Get Free Career Assessment →
              </Link>
              <Link to="/courses" className="btn btn-outline-white btn-lg">
                <span>📚</span> Explore 100+ Syllabi
              </Link>
            </div>

            <div className={styles.badgesRow}>
              <span className={styles.badgeItem}>✓ 100% Live Interactive Cohorts</span>
              <span className={styles.badgeDot}>•</span>
              <span className={styles.badgeItem}>✓ Industry Mentor Code Reviews</span>
              <span className={styles.badgeDot}>•</span>
              <span className={styles.badgeItem}>✓ Production GitHub Portfolio</span>
              <span className={styles.badgeDot}>•</span>
              <span className={styles.badgeItem}>✓ 1-on-1 Mock Interviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
