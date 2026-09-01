import React, { useState } from "react";
import { Course } from "@/data/courses";
import styles from "./StickyEnrollPanel.module.css";

interface StickyEnrollPanelProps {
  course: Course;
}

export default function StickyEnrollPanel({ course }: StickyEnrollPanelProps) {
  const [enrolled, setEnrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolled(true);
  };

  const handleWhatsAppAdvisor = () => {
    const text = `Hi! I have questions about enrolling in ${course.title} (Batch: ${course.nextBatch}). Can you help me?`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      {/* Desktop Sticky Panel */}
      <div className={styles.desktopPanel}>
        <div className={styles.card}>
          <div className={styles.topBadge}>
            <span>🔥 EARLY BIRD ENROLLMENT</span>
            <span className={styles.discountTag}>{discountPercent}% OFF</span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>₹{course.price.toLocaleString()}</span>
            <span className={styles.originalPrice}>₹{course.originalPrice.toLocaleString()}</span>
          </div>
          <span className={styles.taxNote}>+ applicable GST | No-cost EMI from ₹3,833/mo</span>

          {/* Batch Urgency */}
          <div className={styles.urgencyBox}>
            <div className={styles.urgencyItem}>
              <span className={styles.urgencyLabel}>NEXT BATCH STARTS</span>
              <span className={styles.urgencyVal}>{course.nextBatch}</span>
            </div>
            <span className={styles.seatsPill}>⚡ {course.seatsLeft} seats left</span>
          </div>

          {/* Inclusions Quick Check */}
          <div className={styles.inclusionsList}>
            <div className={styles.incItem}>✓ {course.duration} live interactive cohorts</div>
            <div className={styles.incItem}>✓ 3 production portfolio projects</div>
            <div className={styles.incItem}>✓ 1-on-1 resume & mock interview prep</div>
            <div className={styles.incItem}>✓ Lifetime class recordings & code notes</div>
            <div className={styles.incItem}>✓ Industry recognized verified certificate</div>
          </div>

          {/* CTAs */}
          <div className={styles.actionGroup}>
            <button
              className="btn btn-primary btn-lg w-full"
              onClick={() => setShowModal(true)}
            >
              Reserve My Seat Now →
            </button>
            <button
              className="btn btn-outline w-full"
              onClick={handleWhatsAppAdvisor}
            >
              💬 Talk to Course Advisor
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span>🔒</span> 256-Bit Razorpay
            </div>
            <div className={styles.trustBadge}>
              <span>↩️</span> 7-Day Refund Policy
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className={styles.mobileBottomBar}>
        <div className={styles.mobilePriceInfo}>
          <span className={styles.mobilePrice}>₹{course.price.toLocaleString()}</span>
          <span className={styles.mobileSeats}>{course.seatsLeft} seats left</span>
        </div>
        <div className={styles.mobileActions}>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setShowModal(true)}
          >
            Enroll Now →
          </button>
          <button
            className="btn btn-teal btn-icon"
            onClick={handleWhatsAppAdvisor}
            aria-label="WhatsApp Advisor"
          >
            💬
          </button>
        </div>
      </div>

      {/* Checkout / Registration Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.modalClose}
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ✕
            </button>

            {enrolled ? (
              <div className={styles.enrolledSuccess}>
                <div className={styles.successEmoji}>🎉</div>
                <h3 className={styles.modalTitle}>Seat Reserved Successfully!</h3>
                <p className={styles.modalSub}>
                  Welcome to <strong>{course.title}</strong>, {name}!
                </p>
                <p className={styles.modalNote}>
                  We have sent onboarding instructions and schedule details to <strong>{email}</strong>. Our advisor will also reach out via WhatsApp at <strong>{phone}</strong> with orientation links.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-primary w-full mt-md"
                >
                  Go to Course Dashboard →
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className={styles.modalForm}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalCategory}>{course.category}</span>
                  <h3 className={styles.modalTitle}>{course.title}</h3>
                  <div className={styles.modalPriceSummary}>
                    <span>Investment: <strong>₹{course.price.toLocaleString()}</strong></span>
                    <span className={styles.modalBatch}>Cohort: {course.nextBatch}</span>
                  </div>
                </div>

                <div className={styles.modalBody}>
                  <div className="formGroup mb-sm">
                    <label className="label" htmlFor="studentName">Your Full Name</label>
                    <input
                      id="studentName"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      className="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="formGroup mb-sm">
                    <label className="label" htmlFor="studentEmail">Email Address</label>
                    <input
                      id="studentEmail"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="formGroup mb-md">
                    <label className="label" htmlFor="studentPhone">WhatsApp Phone Number</label>
                    <input
                      id="studentPhone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    Confirm & Complete Enrollment (₹{course.price.toLocaleString()}) →
                  </button>

                  <p className={styles.secureText}>
                    🔒 100% Secure Checkout via Razorpay · Instant Batch Confirmation
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
