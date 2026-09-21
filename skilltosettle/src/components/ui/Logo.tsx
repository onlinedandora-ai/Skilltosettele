import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  withLink?: boolean;
}

export default function Logo({
  variant = "dark",
  size = "md",
  className = "",
  withLink = true,
}: LogoProps) {
  const content = (
    <div className={`${styles.logoContainer} ${styles[variant]} ${styles[size]} ${className}`}>
      {/* Official STS Circular Logo */}
      <div className={styles.stsLogoCircleWrap}>
        <img
          src="/sts-logo.png"
          alt="SkilltoSettle STS Logo"
          className={styles.stsLogoCircleImg}
        />
      </div>
      <div className={styles.tagline}>
        <span className={styles.brandTitle}>
          Skill<span className={styles.brandAccent}>to</span>Settle
        </span>
        <span className={styles.brandDomain}>.com</span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link to="/" className={styles.logoLink} aria-label="SkilltoSettle - Home">
        {content}
      </Link>
    );
  }

  return content;
}
