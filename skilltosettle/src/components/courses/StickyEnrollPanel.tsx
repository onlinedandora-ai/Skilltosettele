import React, { useState } from "react";
import { Course } from "@/data/courses";
import { useCurrency } from "@/context/CurrencyContext";
import { getWhatsAppUrl } from "@/utils/constants";
import EnrollmentCheckoutModal from "@/components/checkout/EnrollmentCheckoutModal";
import styles from "./StickyEnrollPanel.module.css";

interface StickyEnrollPanelProps {
  course: Course;
}

export default function StickyEnrollPanel({ course }: StickyEnrollPanelProps) {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const { formatPrice, currencyInfo } = useCurrency();

  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const handleWhatsAppAdvisor = () => {
    const text = `Hi! I have questions about enrolling in ${course.title} (Batch: ${course.nextBatch}). Can you help me?`;
    window.open(getWhatsAppUrl(text), "_blank");
  };

  return (
    <>
      {/* Desktop Sticky Panel */}
      <div className={styles.desktopPanel}>
        <div className={styles.card}>
          <div className={styles.topBadge}>
            <span>EARLY BIRD ENROLLMENT</span>
            <span className={styles.discountTag}>{discountPercent}% OFF</span>
          </div>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(course.price)}</span>
            <span className={styles.originalPrice}>{formatPrice(course.originalPrice)}</span>
          </div>
          <span className={styles.taxNote}>
            {currencyInfo.code === "INR"
              ? "+ applicable GST | No-cost EMI from ₹3,833/mo"
              : `All taxes included | Flexible payment plans available`}
          </span>

          {/* Batch Urgency */}
          <div className={styles.urgencyBox}>
            <div className={styles.urgencyItem}>
              <span className={styles.urgencyLabel}>NEXT BATCH STARTS</span>
              <span className={styles.urgencyVal}>{course.nextBatch}</span>
            </div>
            <span className={styles.seatsPill}>{course.seatsLeft} seats left</span>
          </div>

          {/* Inclusions Quick Check */}
          <div className={styles.inclusionsList}>
            <div className={styles.incItem}>
              <span className={styles.incCheck}>✓</span>
              <span>{course.duration} live interactive cohorts</span>
            </div>
            <div className={styles.incItem}>
              <span className={styles.incCheck}>✓</span>
              <span><strong style={{ color: "#009bb9" }}>🎓 Course Completion Certificate Included</strong></span>
            </div>
            <div className={styles.incItem}>
              <span className={styles.incCheck}>✓</span>
              <span>3 production portfolio capstone projects</span>
            </div>
            <div className={styles.incItem}>
              <span className={styles.incCheck}>✓</span>
              <span>1-on-1 resume & realistic mock interview prep</span>
            </div>
            <div className={styles.incItem}>
              <span className={styles.incCheck}>✓</span>
              <span>Lifetime class recordings & code notes</span>
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.actionGroup}>
            <button
              className="btn btn-primary btn-lg w-full"
              onClick={() => setShowCheckoutModal(true)}
            >
              Reserve My Seat →
            </button>
            <button
              className="btn btn-outline w-full"
              onClick={handleWhatsAppAdvisor}
            >
              Talk to Course Advisor
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Secure 256-Bit SSL</span>
            </div>
            <div className={styles.trustBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>7-Day Refund Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className={styles.mobileBottomBar}>
        <div className={styles.mobilePriceInfo}>
          <span className={styles.mobilePrice}>{formatPrice(course.price)}</span>
          <span className={styles.mobileSeats}>{course.seatsLeft} seats left</span>
        </div>
        <div className={styles.mobileActions}>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setShowCheckoutModal(true)}
          >
            Reserve My Seat →
          </button>
          <button
            className="btn btn-teal btn-icon"
            onClick={handleWhatsAppAdvisor}
            aria-label="WhatsApp Advisor"
          >
            Chat
          </button>
        </div>
      </div>

      {/* Razorpay Checkout Modal */}
      <EnrollmentCheckoutModal
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        title={course.title}
        category={course.category}
        price={course.price}
        originalPrice={course.originalPrice}
        duration={course.duration}
        instructor={course.instructor}
        batch={course.nextBatch}
        slug={course.slug}
      />
    </>
  );
}
