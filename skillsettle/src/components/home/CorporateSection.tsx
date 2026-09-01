import React from "react";
import { Link } from "react-router-dom";
import styles from "./CorporateSection.module.css";

export default function CorporateSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.contentWrap}>
          <h2 className={styles.mainTitle}>We Are Best Corporate Training</h2>
          
          <div className={styles.paragraphs}>
            <p className={styles.leadText}>
              Since the year of 2020 and now at in 2025 &ldquo;Skill to Settle&rdquo; most popular in UI &amp; UX, Web App Development, Digital Marketing, Artificial Intelligence (AI), Machine Learning (ML), DevOps, Data Base, .Net, Java, Python, MS Office Suite, CyberSecurity, Azure, AWS, GCP, Testing, Project Management Office, Business Analyst (BA), Power BI, Power Apps, Power Platform, Microsoft Administration, Office 365, G-Suite, IELTS, TOEFL and many more online training and real time experience projects in both (India &amp; USA) and global too!
            </p>
            <p className={styles.subText}>
              At a time, we are also doing our best for our students by giving them our world-class course training. This gives us boost in popularity in this Digital Tech World with 100% Placement Support.
            </p>
          </div>

          <div className={styles.checklist}>
            <div className={styles.checkItem}>
              <span className={styles.checkIcon}>☑️</span>
              <span className={styles.checkText}>Explore the wide range of online course in the world</span>
            </div>
            <div className={styles.checkItem}>
              <span className={styles.checkIcon}>☑️</span>
              <span className={styles.checkText}>Popular online course in the world</span>
            </div>
          </div>

          <div className={styles.btnRow}>
            <Link to="/corporate" className={styles.knowMoreBtn}>
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
