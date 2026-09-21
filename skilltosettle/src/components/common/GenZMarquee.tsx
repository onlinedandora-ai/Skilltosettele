import React from "react";
import styles from "./GenZMarquee.module.css";

interface MarqueeItem {
  icon: string;
  text: string;
  highlight?: string;
  badge?: string;
}

export default function GenZMarquee() {
  const items: MarqueeItem[] = [
    { icon: "🎯", text: "100% Placement Assistance", highlight: "India & USA", badge: "GUARANTEED" },
    { icon: "🎓", text: "Course Completion Certificate", highlight: "Included", badge: "USA & INDIA" },
    { icon: "⚡", text: "Zero Gatekeeping", highlight: "100% Hands-on Labs", badge: "NO BORING PPTs" },
    { icon: "🚀", text: "Average Career Hike", highlight: "+95% Avg Jump", badge: "₹14–28 LPA" },
    { icon: "👨‍🏫", text: "Live Architect Mentors", highlight: "Eswar • Suresh • Nikhil • Kiran", badge: "1-ON-1 DMs" },
    { icon: "💼", text: "Production Portfolio Capstones", highlight: "GitHub & Cloud Ready", badge: "PROOF OF WORK" },
    { icon: "🌐", text: "Dual Ecosystem Placements", highlight: "India (IST) & USA (CST/EST)", badge: "GLOBAL" },
    { icon: "🔥", text: "Top Tech Hiring Network", highlight: "FAANG, MNCs & US Startups", badge: "ACTIVE NOW" },
  ];

  return (
    <div className={styles.marqueeWrapper} aria-label="SkilltoSettle Gen-Z Tech Career Highlights">
      <div className={styles.marqueeGradientLeft}></div>
      <div className={styles.marqueeGradientRight}></div>

      <div className={styles.marqueeTrack}>
        {/* Render 2 duplicates for infinite seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className={styles.marqueeCard}>
            <span className={styles.marqueeIcon}>{item.icon}</span>
            <span className={styles.marqueeText}>
              {item.text} <strong>{item.highlight}</strong>
            </span>
            {item.badge && <span className={styles.marqueeBadge}>{item.badge}</span>}
            <span className={styles.marqueeDot}>✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
