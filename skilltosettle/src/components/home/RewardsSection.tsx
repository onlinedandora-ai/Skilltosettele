import React from "react";
import { Link } from "react-router-dom";
import styles from "./RewardsSection.module.css";

export default function RewardsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: "28px" }}>
          <div className="section-eyebrow teal">
            <span>MORE THAN A COURSE</span>
          </div>
          <h2 className="text-h2">A Complete Career Acceleration Ecosystem</h2>
          <p className="text-body-lg">
            Beyond live classes, you gain verifiable credentials, production capstone reviews, and 1-on-1 career support.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Card: Win Reward Points & Learning Club */}
          <div className={styles.rewardCard}>
            <div className={styles.rewardTop}>
              <span className={styles.clubBadge}>SKILLTOSETTLE CLUB PERKS</span>
            </div>

            <h3 className={styles.cardTitle}>Learn, Build & Earn Club Reward Points</h3>
            <p className={styles.cardDesc}>
              Complete live cohorts, submit portfolio capstone projects, and maintain high class attendance to earn SkilltoSettle Club Points. Redeem points for advanced specializations, certification exam vouchers, and 1-on-1 career coaching.
            </p>

            <div className={styles.perksList}>
              <div className={styles.perkItem}>
                <span className={styles.perkIcon}>🎓</span>
                <span><strong>Earn Your Certificate:</strong> Successfully complete your course and receive an official SkilltoSettle Course Completion Certificate.</span>
              </div>
              <div className={styles.perkItem}>
                <span className={styles.perkIcon}>✓</span>
                <span>Earn 500 points on capstone GitHub project submission</span>
              </div>
              <div className={styles.perkItem}>
                <span className={styles.perkIcon}>✓</span>
                <span>Redeem for 1-on-1 interview mock credits with domain leads</span>
              </div>
              <div className={styles.perkItem}>
                <span className={styles.perkIcon}>✓</span>
                <span>Access sponsored certification vouchers and discounts</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Link to="/courses" className="btn btn-primary btn-sm">
                Explore Courses →
              </Link>
            </div>
          </div>

          {/* Right Card: Mobile-Optimized Learning Portal */}
          <div className={styles.mobileCard}>
            <div className={styles.mobileTop}>
              <span className={styles.mobileBadge}>SEAMLESS ACCESS</span>
            </div>

            <h3 className={styles.cardTitle}>Learn Anywhere with Our Mobile-Ready Portal</h3>
            <p className={styles.cardDesc}>
              Access live class streams, session recordings, practical exercises, and instructor doubt channels directly from your phone, tablet, or laptop.
            </p>

            <div className={styles.featureHighlights}>
              <div className={styles.featBox}>
                <span className={styles.featNum}>100%</span>
                <span className={styles.featLabel}>Mobile Optimized</span>
              </div>
              <div className={styles.featBox}>
                <span className={styles.featNum}>2h</span>
                <span className={styles.featLabel}>Quick Recording Uploads</span>
              </div>
              <div className={styles.featBox}>
                <span className={styles.featNum}>24/7</span>
                <span className={styles.featLabel}>WhatsApp Mentor Support</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Link to="/career-finder" className="btn btn-teal btn-sm">
                Take Assessment →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
