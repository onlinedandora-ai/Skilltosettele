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
              <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
            </div>

            <h2 className={styles.title}>
              Advance Your Technical Career in India &amp; USA <br />
              <span className="text-gradient-warm">With 100% Placement Assistance.</span>
            </h2>

            <p className={styles.desc}>
              Join ambitious learners and working professionals across India and the USA who mastered practical tech skills and secured top roles with SkilltoSettle.
            </p>

            <div className={styles.ctaRow}>
              <Link to="/career-finder" className="btn btn-warm btn-lg">
                Free Assessment →
              </Link>
              <Link to="/courses" className="btn btn-outline-white btn-lg">
                Explore Programs
              </Link>
            </div>

            <div className={styles.badgesRow}>
              <span className={styles.badgeItem}>✓ 100% Placement Assistance</span>
              <span className={styles.badgeDot}>•</span>
              <span className={styles.badgeItem}>✓ India &amp; USA Hiring Networks</span>
              <span className={styles.badgeDot}>•</span>
              <span className={styles.badgeItem}>✓ 1-on-1 Mentor Code Reviews</span>
              <span className={styles.badgeDot}>•</span>
              <span className={styles.badgeItem}>✓ Course Completion Certificate Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
