import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const projects = [
    {
      id: "1",
      num: "PROJECT 01",
      title: "Enterprise SOC Threat Hunting & SIEM Lab",
      tools: ["Splunk SIEM", "Wireshark", "Metasploit", "Snort", "Linux Security"],
      desc: "Simulate live network attack vectors, analyze TCP/IP packet captures, write incident response playbooks, and monitor real-time threat intelligence in Splunk SOC.",
      highlight: "Portfolio Capstone for Cyber Security",
      gradient: "linear-gradient(135deg, #00d4aa15, #0090ff15)",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "2",
      num: "PROJECT 02",
      title: "End-to-End Big Data Streaming Lakehouse & ML",
      tools: ["Apache Spark", "Kafka", "Python", "SQL", "Airflow", "Power BI"],
      desc: "Ingest millions of real-time transactions using Kafka and Spark. Automate ETL with Airflow, build predictive ML models, and design executive Power BI KPI reporting.",
      highlight: "Flagship Capstone for Data Scientists & Engineers",
      gradient: "linear-gradient(135deg, #6c63ff15, #00d4aa15)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "3",
      num: "PROJECT 03",
      title: "Algorithmic Order Matching Engine & Key-Value Store",
      tools: ["Java", "Python", "Algorithms", "Dynamic Programming", "System Design"],
      desc: "Build a high-throughput, low-latency financial order matching engine and in-memory key-value cache utilizing optimal LeetCode data structures and design patterns.",
      highlight: "Tier-1 Capstone for Software Engineers (SDE)",
      gradient: "linear-gradient(135deg, #ff6b6b15, #f59e0b15)",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>REAL-WORLD CAPSTONES</span>
          </div>
          <h2 className="text-h2">Hands-on Projects, Projects on Experience.</h2>
          <p className="text-body-lg">
            Hiring managers value what you can build and ship. Every program includes production-grade portfolio projects you can discuss during interviews.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.projectImageWrap}>
                <img src={p.image} alt={p.title} className={styles.projectImg} loading="lazy" />
                <div className={styles.projectImgOverlay}></div>
                <span className={styles.projNum}>{p.num}</span>
                <span className={styles.highlightPill}>{p.highlight}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>

                <div className={styles.toolsRow}>
                  <span className={styles.toolsLabel}>Tech Stack:</span>
                  <div className={styles.tags}>
                    {p.tools.map((t, i) => (
                      <span key={i} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.deliverable}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>GitHub Repository + Live Demo + Architecture Diagram</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomText}>
            <span>All projects are reviewed 1-on-1 by senior industry mentors before submission.</span>
          </div>
          <Link to="/courses" className="btn btn-primary btn-sm">
            View Courses →
          </Link>
        </div>
      </div>
    </section>
  );
}
