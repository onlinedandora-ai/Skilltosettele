import React from "react";
import { motion } from "motion/react";
import styles from "./StatsOverview.module.css";

export default function StatsOverview() {
  const stats = [
    {
      id: "courses",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      ),
      number: "100+",
      label: "Online Courses",
      bgColor: "#f59e0b",
    },
    {
      id: "students",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      number: "1000+",
      label: "Student Enrolled",
      bgColor: "#6366f1",
    },
    {
      id: "countries",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      number: "100+",
      label: "Countries Student",
      bgColor: "#0ea5e9",
    },
    {
      id: "assistance",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      number: "100%",
      label: "Placement Assistance (India & USA)",
      bgColor: "#009bb9",
    },
    {
      id: "feedback",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      number: "99%",
      label: "Positive Feedback",
      bgColor: "#10b981",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.gridContainer}>
          {/* Central subtle backdrop circle */}
          <div className={styles.centerBgDeco}></div>

          <div className={styles.grid}>
            {stats.map((item, idx) => (
              <motion.div
                key={item.id}
                className={styles.statCard}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={styles.iconCircle}
                  style={{
                    backgroundColor: item.bgColor,
                    color: "#ffffff",
                  }}
                >
                  {item.icon}
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.statNumber}>{item.number}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
