import React from "react";
import { Link } from "react-router-dom";
import { liveClasses } from "@/data/testimonials";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./LiveClasses.module.css";

export default function LiveClasses() {
  const { formatPrice } = useCurrency();

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>UPCOMING BATCHES</span>
          </div>
          <h2 className="text-h2">Live Classes Starting Soon</h2>
          <p className="text-body-lg">
            Learn alongside peers in structured live batches with direct instructor interaction, live code reviews, and instant doubt resolution.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", padding: "6px 14px", borderRadius: "999px", fontSize: "clamp(0.68rem, 3vw, 0.78rem)", fontWeight: 700, marginTop: "12px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center", lineHeight: 1.35 }}>
            <span>🎓</span>
            <span>COURSE COMPLETION CERTIFICATE INCLUDED WITH EVERY BATCH</span>
          </div>
        </div>

        <div className={styles.grid}>
          {liveClasses.slice(0, 4).map((batch) => (
            <div key={batch.id} className={styles.card}>
              {/* Badges Flex Header */}
              <div className={styles.cardBadges}>
                <div className={styles.badgeTopRow}>
                  <span className={styles.liveBadge}>
                    <span className={styles.pulseDot}></span> Live Cohort
                  </span>
                  <span className={styles.seatsLeft}>
                    {batch.seatsLeft} seats left
                  </span>
                </div>
                <div className={styles.certRow}>
                  <span className={styles.certBadge}>
                    🎓 Course Completion Certificate Included
                  </span>
                </div>
              </div>

              <h3 className={styles.courseTitle}>{batch.course}</h3>

              <div className={styles.metaList}>
                <div className={styles.metaItem}>
                  <div>
                    <div className={styles.metaLabel}>Batch Starts</div>
                    <div className={styles.metaVal}>{batch.startDate}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <div>
                    <div className={styles.metaLabel}>Schedule</div>
                    <div className={styles.metaVal}>{batch.time}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <div>
                    <div className={styles.metaLabel}>Lead Mentor</div>
                    <div className={styles.metaVal}>{batch.instructor}</div>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.priceBox}>
                  <span className={styles.priceLabel}>Early Bird Price</span>
                  <span className={styles.priceVal}>{formatPrice(batch.price)}</span>
                </div>
                <Link to={`/courses/${batch.slug}`} className={`btn btn-primary btn-sm ${styles.reserveBtn}`}>
                  Reserve My Seat →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomNote}>
          <span><strong>Need custom cohort timings?</strong> We have weekend and evening batches available across global timezones.</span>
          <Link to="/live-classes" className="btn btn-outline btn-sm">
            View Timings
          </Link>
        </div>
      </div>
    </section>
  );
}
