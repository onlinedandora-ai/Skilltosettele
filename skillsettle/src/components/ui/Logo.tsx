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
      {/* STS Monogram with stylish serif structure and ribbon overlay */}
      <div className={styles.stsMonogramWrap}>
        <span className={styles.stsLetters}>STS</span>
        <div className={styles.stsRibbon}>
          <span className={styles.ribbonLine}></span>
          <span className={styles.ribbonText}>SKILL TO SETTLE</span>
          <span className={styles.ribbonLine}></span>
        </div>
      </div>
      <div className={styles.tagline}>
        <span className={styles.brandTitle}>Skill<span className={styles.brandAccent}>settle</span></span>
        <span className={styles.brandDomain}>.com</span>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link to="/" className={styles.logoLink} aria-label="Skillsettle - Home">
        {content}
      </Link>
    );
  }

  return content;
}
