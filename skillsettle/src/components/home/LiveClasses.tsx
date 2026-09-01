import React from "react";
import { Link } from "react-router-dom";
import { liveClasses } from "@/data/testimonials";
import styles from "./LiveClasses.module.css";

export default function LiveClasses() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>📅</span>
            <span>INTERACTIVE COHORTS</span>
          </div>
          <h2 className="text-h2">Live Classes Starting Soon</h2>
          <p className="text-body-lg">
            Learn alongside peers in structured live batches with direct instructor interaction, live code reviews, and instant doubt resolution.
          </p>
        </div>

        <div className={styles.grid}>
          {liveClasses.map((batch) => (
            <div key={batch.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.liveBadge}>
                  <span className={styles.pulseDot}></span> Live Cohort
                </span>
                <span className={styles.seatsLeft}>
                  ⚡ Only {batch.seatsLeft} seats left
                </span>
              </div>

              <h3 className={styles.courseTitle}>{batch.course}</h3>

              <div className={styles.metaList}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📅</span>
                  <div>
                    <div className={styles.metaLabel}>Batch Starts</div>
                    <div className={styles.metaVal}>{batch.startDate}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>⏰</span>
                  <div>
                    <div className={styles.metaLabel}>Schedule</div>
                    <div className={styles.metaVal}>{batch.time}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>👨‍🏫</span>
                  <div>
                    <div className={styles.metaLabel}>Lead Mentor</div>
                    <div className={styles.metaVal}>{batch.instructor}</div>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.priceBox}>
                  <span className={styles.priceLabel}>Early Bird Price</span>
                  <span className={styles.priceVal}>₹{batch.price.toLocaleString()}</span>
                </div>
                <Link to={`/courses/${batch.slug}`} className="btn btn-primary btn-sm">
                  Reserve My Seat →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomNote}>
          <span>💡 <strong>Can&apos;t make these timings?</strong> We have weekend and evening batches available across all timezones.</span>
          <Link to="/live-classes" className="btn btn-outline btn-sm">
            View All Cohort Timings
          </Link>
        </div>
      </div>
    </section>
  );
}
