import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const projects = [
    {
      id: "1",
      num: "PROJECT 01",
      title: "E-Commerce Real-Time Sales & Churn Analytics",
      tools: ["SQL", "PostgreSQL", "Power BI", "DAX", "Python"],
      desc: "Architect a full analytics warehouse for 500k+ transactions. Build executive KPI dashboards analyzing revenue, customer lifetime value, and cohort retention.",
      highlight: "Portfolio Star for Data Analysts",
      gradient: "linear-gradient(135deg, #6c63ff15, #00d4aa15)",
    },
    {
      id: "2",
      num: "PROJECT 02",
      title: "Multi-Cloud Zero-Downtime CI/CD Pipeline",
      tools: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
      desc: "Implement declarative Infrastructure-as-Code to provision AWS EKS cluster, containerize microservices, and deploy zero-downtime rolling updates with monitoring.",
      highlight: "Production Ready for DevOps Engineers",
      gradient: "linear-gradient(135deg, #00d4aa15, #0090ff15)",
    },
    {
      id: "3",
      num: "PROJECT 03",
      title: "Predictive Machine Learning API Service",
      tools: ["Python", "Scikit-Learn", "FastAPI", "Docker", "MLflow"],
      desc: "Train, validate, and optimize predictive classification models for customer churn. Containerize and deploy the model as a scalable REST API with automated testing.",
      highlight: "Industry Standard for ML Engineers",
      gradient: "linear-gradient(135deg, #ff6b6b15, #f59e0b15)",
    },
  ];

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>💻</span>
            <span>PROVE YOUR CAPABILITY</span>
          </div>
          <h2 className="text-h2">Don&apos;t Just Learn. Build.</h2>
          <p className="text-body-lg">
            Hiring managers don&apos;t care about certificate printouts — they care about what you can ship. Every program includes production-grade portfolio projects.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.card} style={{ background: p.gradient }}>
              <div className={styles.cardTop}>
                <span className={styles.projNum}>{p.num}</span>
                <span className={styles.highlightPill}>⭐ {p.highlight}</span>
              </div>

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
          ))}
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomText}>
            <span className={styles.fireIcon}>🔥</span>
            <span>All projects are reviewed 1-on-1 by senior industry mentors before submission.</span>
          </div>
          <Link to="/courses" className="btn btn-primary btn-sm">
            View Courses with Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
