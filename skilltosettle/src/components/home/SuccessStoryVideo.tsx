import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import styles from "./SuccessStoryVideo.module.css";
import { getWhatsAppUrl } from "@/utils/constants";

export default function SuccessStoryVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section} aria-label="Success Story and How We Work">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span>✦ SUCCESS STORY · HOW WE WORK</span>
          </div>
          <h2 className={styles.title}>Inside SkilltoSettle: How We Work &amp; Transform Careers</h2>
          <p className={styles.subtitle}>
            Here are the details about our institute, live cohorts, and how we guide students from zero to production-grade engineers with <strong>100% Placement Assistance (India &amp; USA)</strong>.
          </p>
        </div>

        {/* Video Canvas Spotlight Card */}
        <div className={styles.videoCardWrap}>
          <div className={styles.innerGrid}>
            {/* Visual Media Showcase with Central Play Button */}
            <div className={styles.collageBox}>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80"
                alt="SkilltoSettle Cohort Success Story"
                className={styles.collageBgImg}
              />
              <div className={styles.collageOverlay}></div>

              <button
                type="button"
                className={styles.playBtn}
                aria-label="Play Success Story and Cohort Tour Video"
                onClick={() => setIsModalOpen(true)}
              >
                <span className={styles.playIcon}>▶</span>
              </button>

              <div className={styles.videoBadge}>
                <span>🔴 COHORT TOUR &amp; SUCCESS STORY</span>
              </div>
            </div>

            {/* Content Details */}
            <div className={styles.contentSide}>
              <h3 className={styles.contentTitle}>
                Real Mentors. Real Infrastructure. Real Job Outcomes.
              </h3>
              <p className={styles.contentDesc}>
                Unlike static recorded videos, SkilltoSettle provides live interactive cohorts led by principal architects in DevOps, Data Science, Cyber Security, and Cloud.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span><strong>Daily Live Classes:</strong> Real-time doubt resolution &amp; active screen-share coding sessions.</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span><strong>Production Capstone Labs:</strong> Deploy enterprise infrastructure on AWS, Azure &amp; Kubernetes.</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span><strong>100% Placement Drives:</strong> Resume optimization, technical mock interviews &amp; hiring referrals across India &amp; USA.</span>
                </div>
              </div>

              <div className={styles.actionBtnRow}>
                <button
                  type="button"
                  className={styles.watchBtn}
                  onClick={() => setIsModalOpen(true)}
                >
                  ▶ Watch How We Work (Tour)
                </button>
                <span className={styles.placementAssistanceTag}>
                  🎯 100% Placement Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Player */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className={styles.modalBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className={styles.modalDialog}
                initial={{ scale: 0.94, y: 16 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 16 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalHeader}>
                  <h4 className={styles.modalTitle}>SkilltoSettle: Institute Tour &amp; Student Transformations</h4>
                  <button
                    type="button"
                    className={styles.modalCloseBtn}
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close Tour Modal"
                  >
                    ✕
                  </button>
                </div>

                <div className={styles.modalBody}>
                  <div className={styles.modalVideoPlaceholder}>
                    <div style={{ fontSize: "3rem", marginBottom: "10px" }}>🎓</div>
                    <h4 style={{ color: "#ffffff", fontSize: "1.15rem", marginBottom: "6px" }}>
                      Experience the SkilltoSettle Learning Ecosystem
                    </h4>
                    <p style={{ color: "#94a3b8", fontSize: "0.86rem", maxWidth: "480px" }}>
                      From Houston TX Global Program Office to India Delivery Centers, our live classes, production GitHub capstones, and course completion certificates are built for top tech outcomes.
                    </p>
                    <div style={{ marginTop: "16px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                      <Link to="/courses" className="btn btn-primary btn-sm" onClick={() => setIsModalOpen(false)}>
                        Explore Cohorts →
                      </Link>
                      <a
                        href={getWhatsAppUrl("Hi! I watched the SkilltoSettle Success Story tour and want to know more about upcoming batches.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp btn-sm"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className={styles.tourHighlights}>
                    <div className={styles.highlightCard}>
                      <div className={styles.hlNum}>100%</div>
                      <div className={styles.hlText}>Placement Assistance (India &amp; USA)</div>
                    </div>
                    <div className={styles.highlightCard}>
                      <div className={styles.hlNum}>₹14.5 LPA</div>
                      <div className={styles.hlText}>Average Placed CTC</div>
                    </div>
                    <div className={styles.highlightCard}>
                      <div className={styles.hlNum}>350+</div>
                      <div className={styles.hlText}>Active Hiring Enterprise Partners</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
