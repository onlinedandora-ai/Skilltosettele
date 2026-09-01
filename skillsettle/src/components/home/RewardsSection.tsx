import React from "react";
import { Link } from "react-router-dom";
import styles from "./RewardsSection.module.css";

export default function RewardsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Card: Win Reward Points & Learning Club */}
          <div className={styles.rewardCard}>
            <div className={styles.rewardTop}>
              <div className={styles.trophyIcon}>🏆</div>
              <span className={styles.clubBadge}>SKILLSETTLE CLUB PERKS</span>
            </div>

            <h3 className={styles.cardTitle}>Learn, Build & Earn Club Reward Points</h3>
            <p className={styles.cardDesc}>
              Complete live cohorts, submit portfolio capstone projects, and maintain high class attendance to earn Skillsettle Club Points. Redeem points for advanced specializations, certification exam vouchers, and 1-on-1 career coaching.
            </p>

            <div className={styles.perksList}>
              <div className={styles.perkItem}>
                <span className={styles.perkIcon}>✨</span>
                <span>Earn 500 pts on capstone GitHub submission</span>
              </div>
              <div className={styles.perkItem}>
                <span className={styles.perkIcon}>🎁</span>
                <span>Redeem for 1-on-1 interview mock credits</span>
              </div>
              <div className={styles.perkItem}>
                <span className={styles.perkIcon}>📜</span>
                <span>Get sponsored global certification vouchers</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Link to="/courses" className="btn btn-primary btn-sm">
                Explore Reward-Eligible Courses →
              </Link>
            </div>
          </div>

          {/* Right Card: Mobile-Optimized Learning Portal */}
          <div className={styles.mobileCard}>
            <div className={styles.mobileTop}>
              <div className={styles.phoneIcon}>📱</div>
              <span className={styles.mobileBadge}>SEAMLESS ACCESS</span>
            </div>

            <h3 className={styles.cardTitle}>Learn Anywhere with Our Mobile-Ready Portal</h3>
            <p className={styles.cardDesc}>
              Access live class streams, HD session recordings, quiz assessments, and instructor doubt channels directly from your phone, tablet, or laptop with zero lag.
            </p>

            <div className={styles.featureHighlights}>
              <div className={styles.featBox}>
                <span className={styles.featNum}>100%</span>
                <span className={styles.featLabel}>Mobile Optimized</span>
              </div>
              <div className={styles.featBox}>
                <span className={styles.featNum}>2h</span>
                <span className={styles.featLabel}>Instant Recording Uploads</span>
              </div>
              <div className={styles.featBox}>
                <span className={styles.featNum}>24/7</span>
                <span className={styles.featLabel}>WhatsApp Mentor Support</span>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <Link to="/career-finder" className="btn btn-teal btn-sm">
                Take 2-Min Career Assessment →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
