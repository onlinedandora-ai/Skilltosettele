import React from "react";
import styles from "./PaymentBadges.module.css";

interface PaymentBadgesProps {
  layout?: "row" | "grid" | "compact";
  showLabel?: boolean;
  className?: string;
}

export default function PaymentBadges({
  layout = "row",
  showLabel = true,
  className = "",
}: PaymentBadgesProps) {
  return (
    <div className={`${styles.wrapper} ${styles[layout]} ${className}`}>
      {showLabel && <span className={styles.secureLabel}>SECURE PAYMENTS:</span>}

      <div className={styles.badgeList}>
        {/* Razorpay Badge */}
        <div className={styles.paymentCard} title="Razorpay 256-bit Encrypted Checkout">
          <svg className={styles.brandIcon} viewBox="0 0 100 24" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8 1.5L4.5 13.2h6.1L8.2 22.5l10.8-13h-6.2l3.8-8z" fill="#0C2340"/>
            <path d="M14.2 1.5L5.9 13.2H12L9.6 22.5l10.8-13h-6.2l3.8-8z" fill="#0284C7"/>
            <text x="26" y="17" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3px">
              Razorpay
            </text>
          </svg>
          <span className={styles.cardSubText}>256-bit</span>
        </div>

        {/* UPI / GPay / PhonePe Unified Badge */}
        <div className={styles.paymentCard} title="UPI, Google Pay, PhonePe, Paytm">
          <div className={styles.upiIconsGroup}>
            {/* UPI Logo */}
            <svg viewBox="0 0 32 16" height="14" width="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L6 16H0L4 0h6z" fill="#097939"/>
              <path d="M18 0l-4 16h-6l4-16h6z" fill="#ED752E"/>
              <path d="M26 0l-4 16h-6l4-16h6z" fill="#097939"/>
            </svg>
            {/* GPay Logo */}
            <svg viewBox="0 0 24 24" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            {/* PhonePe Icon */}
            <span className={styles.phonePeIcon}>पे</span>
          </div>
          <span className={styles.badgeTextBold}>UPI / GPay / PhonePe</span>
        </div>

        {/* 0% No-Cost EMI */}
        <div className={styles.paymentCard} title="0% No-Cost EMI Available on all Major Credit Cards">
          <div className={styles.emiIconBox}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2"></rect>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
          </div>
          <div className={styles.emiTextWrap}>
            <span className={styles.emiHighlight}>0% EMI</span>
            <span className={styles.cardSubText}>No-Cost</span>
          </div>
        </div>

        {/* Stripe & Cards Global */}
        <div className={styles.paymentCard} title="Stripe Global / Visa & Mastercard Accepted">
          {/* Stripe SVG */}
          <svg className={styles.stripeLogo} viewBox="0 0 40 16" height="14" fill="currentColor">
            <path d="M5.4 6.7c0-.7.6-1.1 1.6-1.1 1.5 0 3.3.5 4.8 1.3V2.4C10.2 1.8 8.6 1.5 7 1.5 2.8 1.5 0 3.7 0 7c0 5.2 7.1 4.4 7.1 6.6 0 .8-.7 1.1-1.7 1.1-1.7 0-3.8-.7-5.5-1.7v4.7c1.8.8 3.7 1.1 5.5 1.1 4.3 0 7.3-2.1 7.3-5.6 0-5.6-7.3-4.6-7.3-6.5zM15 1.8h5.3v16.7H15zm7.3 3.5h5.1v2.3h.1c.7-1.6 2.3-2.6 4.3-2.6h1.2v5.2h-1.8c-2.3 0-3.6 1.4-3.6 4v6.3h-5.3V5.3zm12.4 13.2h5.3V9h-5.3v9.5z" />
          </svg>
          {/* Card Icons */}
          <div className={styles.cardsPair}>
            {/* Visa */}
            <span className={styles.visaBadge}>VISA</span>
            {/* Mastercard Circles */}
            <div className={styles.mcCircles}>
              <span className={styles.mcRed}></span>
              <span className={styles.mcYellow}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
