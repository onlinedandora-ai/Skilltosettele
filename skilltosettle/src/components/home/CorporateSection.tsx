import React from "react";
import { Link } from "react-router-dom";
import styles from "./CorporateSection.module.css";

export default function CorporateSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.corpFlex}>
          {/* Text Content Left */}
          <div className={styles.contentWrap}>
            <h2 className={styles.mainTitle}>Leading Corporate &amp; Tech Training (India &amp; USA)</h2>
            
            <div className={styles.paragraphs}>
              <p className={styles.leadText}>
                Since 2020, SkilltoSettle has helped students and professionals build in-demand tech skills through practical, industry-focused training.
              </p>
              <p className={styles.subText}>
                With real-world project experience, expert mentorship, and globally relevant certifications, we prepare learners for opportunities across India, the USA, and beyond.
              </p>
            </div>

            <div className={styles.checklist}>
              <div className={styles.checkItem}>
                <span className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009bb9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 10 11 15 8 12"></polyline>
                  </svg>
                </span>
                <span className={styles.checkText}>100% Placement Assistance &amp; Real-World Project Experience</span>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009bb9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 10 11 15 8 12"></polyline>
                  </svg>
                </span>
                <span className={styles.checkText}>Industry-Recognized Certifications &amp; 1-on-1 Mentorship</span>
              </div>
            </div>

            <div className={styles.btnRow}>
              <Link to="/corporate" className={styles.knowMoreBtn}>
                Know More
              </Link>
            </div>
          </div>

          {/* Corporate Image Right */}
          <div className={styles.imageWrap}>
            <img
              src="/images/corporate-training.jpg"
              alt="SkilltoSettle Corporate Training Workshop"
              className={styles.corpImg}
            />
            <div className={styles.imgBadge}>
              <span className={styles.badgeNumber}>100+</span>
              <span className={styles.badgeText}>Enterprise Teams Upskilled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
