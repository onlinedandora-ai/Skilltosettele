import React from "react";
import { Link } from "react-router-dom";
import { testimonials } from "@/data/testimonials";
import StarRating from "@/components/ui/StarRating";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>⭐</span>
            <span>PROVEN CAREER RESULTS</span>
          </div>
          <h2 className="text-h2">Real Learners. Real Transformations.</h2>
          <p className="text-body-lg">
            See how professionals switched from non-technical and legacy roles into high-paying technology careers through Skillsettle.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div className={styles.meta}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.roleCompany}>
                    {t.role} • <strong>{t.company}</strong>
                  </div>
                </div>
              </div>

              <div className={styles.stars}>
                <StarRating rating={t.rating} showText={false} />
              </div>

              <blockquote className={styles.quote}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className={styles.transformation}>
                <div className={styles.transRow}>
                  <span className={styles.transLabel}>Before:</span>
                  <span className={styles.transBefore}>{t.before}</span>
                </div>
                <div className={styles.transRow}>
                  <span className={styles.transLabel}>Outcome:</span>
                  <span className={styles.transAfter}>🎯 {t.after}</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.courseTag}>Course: {t.course}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link to="/success-stories" className="btn btn-outline btn-md">
            Read 50+ Verified Student Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
