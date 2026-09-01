import React from "react";
import styles from "./StatsOverview.module.css";

export default function StatsOverview() {
  const stats = [
    {
      id: "courses",
      icon: "📖",
      number: "100+",
      label: "Online Courses",
      accent: "#f59e0b",
      bgColor: "#fffbeb",
      iconBg: "#fef3c7",
      textColor: "#d97706",
    },
    {
      id: "students",
      icon: "👥",
      number: "1000+",
      label: "Student Enrolled",
      accent: "#6366f1",
      bgColor: "#eef2ff",
      iconBg: "#e0e7ff",
      textColor: "#4f46e5",
    },
    {
      id: "countries",
      icon: "🌐",
      number: "100+",
      label: "Countries Student",
      accent: "#0ea5e9",
      bgColor: "#f0f9ff",
      iconBg: "#e0f2fe",
      textColor: "#0284c7",
    },
    {
      id: "feedback",
      icon: "💚",
      number: "100+",
      label: "Positive Feedback",
      accent: "#10b981",
      bgColor: "#ecfdf5",
      iconBg: "#d1fae5",
      textColor: "#059669",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.gridContainer}>
          {/* Central subtle backdrop circle */}
          <div className={styles.centerBgDeco}></div>

          <div className={styles.grid}>
            {stats.map((item) => (
              <div key={item.id} className={styles.statCard}>
                <div
                  className={styles.iconCircle}
                  style={{
                    backgroundColor: item.iconBg,
                    color: item.textColor,
                  }}
                >
                  <span className={styles.iconText}>{item.icon}</span>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.statNumber}>{item.number}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
