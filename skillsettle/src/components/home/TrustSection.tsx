import React from "react";
import styles from "./TrustSection.module.css";

export default function TrustSection() {
  const pillars = [
    {
      icon: "👨‍🏫",
      title: "Practitioner-Led",
      desc: "Taught exclusively by working engineers and industry leads with 7–12+ years of production experience.",
    },
    {
      icon: "🛠️",
      title: "Production Projects",
      desc: "Build real infrastructure pipelines, enterprise databases, and deployed ML APIs — not toy exercises.",
    },
    {
      icon: "🔄",
      title: "Flexible & Lifetime",
      desc: "Attend interactive live sessions and retain lifetime access to all class recordings, source code, and updates.",
    },
    {
      icon: "💼",
      title: "Career & Interview Support",
      desc: "1-on-1 resume optimization, LinkedIn profile review, and realistic mock interviews with domain leads.",
    },
    {
      icon: "🌍",
      title: "Global Community",
      desc: "Join a growing alumni network of 1,000+ professionals working across top tech companies worldwide.",
    },
    {
      icon: "💬",
      title: "Direct Mentor Access",
      desc: "Get unblocked fast with dedicated community channels and live doubt clarification sessions every week.",
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🛡️</span>
            <span>BUILT FOR OUTCOMES</span>
          </div>
          <h2 className="text-h2">Why Learners Choose Skillsettle</h2>
          <p className="text-body-lg">
            We stripped away the fluff of conventional courses to focus on what actually moves your career forward.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>{p.icon}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
