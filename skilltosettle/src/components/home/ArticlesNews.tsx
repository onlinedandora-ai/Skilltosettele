import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import styles from "./ArticlesNews.module.css";

interface Article {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  fullBody: React.ReactNode;
}

const ARTICLES: Article[] = [
  {
    id: "devops-roadmap-2026",
    category: "Cloud & DevOps",
    date: "Sept 2026",
    readTime: "5 Min Read",
    title: "DevOps with AI: The 2026 High-Scale Career Roadmap",
    excerpt: "Why traditional CI/CD pipelines are being replaced by AI-automated deployment workflows, ArgoCD GitOps, and multi-region Kubernetes clusters.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop&q=80",
    fullBody: (
      <>
        <p>
          In 2026, the demand for DevOps engineers has pivoted toward AI-assisted infrastructure and GitOps observability. Engineers who master automated rollback models, ArgoCD synchronization, and multi-region EKS setups are commanding ₹18–28 LPA packages across India and $120k+ in the USA.
        </p>
        <h4>Key Core Skills for 2026:</h4>
        <ul>
          <li><strong>Infrastructure as Code (IaC):</strong> Terraform modules with automated policy checking.</li>
          <li><strong>GitOps &amp; Kubernetes:</strong> Declarative state management with ArgoCD and Helm.</li>
          <li><strong>AI Observability:</strong> Automated anomaly detection in Prometheus &amp; Grafana alerts.</li>
        </ul>
        <p>
          Our <strong>DevOps with AI Masterclass</strong> at SkilltoSettle prepares you with real production capstone deployments to land these top roles.
        </p>
      </>
    ),
  },
  {
    id: "sql-data-engineering",
    category: "Data & Analytics",
    date: "Sept 2026",
    readTime: "6 Min Read",
    title: "Breaking into Data Engineering: From SQL to AI Lakehouses",
    excerpt: "How mastering window functions, query execution plans, and Apache Spark opens direct hiring referrals at top Fortune 500 tech companies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    fullBody: (
      <>
        <p>
          SQL remains the undisputed lingua franca of data systems. However, modern high-scale employers test candidates on execution plan optimization, partitioning schemes, and big data streaming architectures.
        </p>
        <h4>The 3 Must-Know Data Milestones:</h4>
        <ul>
          <li><strong>Complex Window Functions:</strong> DENSE_RANK, LEAD, LAG, and sliding frames.</li>
          <li><strong>ETL/ELT Lakehouses:</strong> Migrating raw PostgreSQL streams into Cloud Delta Lakehouses.</li>
          <li><strong>Real-Time Analytics:</strong> Streaming telemetry data into interactive dashboards and reporting engines.</li>
        </ul>
        <p>
          Students in our <strong>SQL &amp; Data Engineering Cohort</strong> build end-to-end million-row pipelines that stand out on resumes.
        </p>
      </>
    ),
  },
  {
    id: "cyber-security-soc",
    category: "Cyber Security",
    date: "Sept 2026",
    readTime: "4 Min Read",
    title: "Cyber Security & SOC Defense: Landing Your First Security Role",
    excerpt: "A practical guide to offensive security, SIEM threat hunting, and industry-standard compliance certifications for global IT markets.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    fullBody: (
      <>
        <p>
          With enterprise cloud adoption skyrocketing, security operations centers (SOC) are facing a severe shortage of skilled threat intelligence analysts and penetration testers.
        </p>
        <h4>What Hiring Managers Look For:</h4>
        <ul>
          <li><strong>Hands-On Kali Linux &amp; Metasploit:</strong> Live penetration testing methodologies.</li>
          <li><strong>SIEM Operations:</strong> Splunk, ELK stack log analysis, and incident remediation.</li>
          <li><strong>Zero-Trust Architecture:</strong> Hardening identity management and network perimeters.</li>
        </ul>
        <p>
          SkilltoSettle's <strong>Cyber Security Masterclass</strong> gives you live sandbox labs and a verifiable certificate included.
        </p>
      </>
    ),
  },
];

export default function ArticlesNews() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section className={styles.section} aria-label="Articles, News & Career Guides">
      <div className="container">
        <div className={styles.topBar}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span>✦ ARTICLES &amp; NEWS · TECH CAREER GUIDES</span>
            </div>
            <h2 className={styles.title}>Industry Insights &amp; Career Syllabi Guides</h2>
            <p className={styles.subtitle}>
              Stay ahead with curated breakdowns from our lead architects on in-demand engineering skills, salary trends, and interview preparation.
            </p>
          </div>

          <Link to="/courses" className={styles.allPostBtn}>
            Explore All Courses &amp; Syllabi →
          </Link>
        </div>

        {/* 3-Card Grid */}
        <div className={styles.grid}>
          {ARTICLES.map((article) => (
            <article key={article.id} className={styles.articleCard}>
              <div className={styles.thumbWrap}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.thumbImg}
                  loading="lazy"
                />
                <span className={styles.thumbCategory}>{article.category}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span>📅 {article.date}</span>
                  <span>•</span>
                  <span>⏱️ {article.readTime}</span>
                </div>

                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>

                <button
                  type="button"
                  className={styles.readMoreBtn}
                  onClick={() => setActiveArticle(article)}
                >
                  Read Full Guide →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              className={styles.modalBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
            >
              <motion.div
                className={styles.modalDialog}
                initial={{ scale: 0.94, y: 16 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 16 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalHeader}>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#009bb9", textTransform: "uppercase" }}>
                      {activeArticle.category} • {activeArticle.date}
                    </span>
                    <h3 className={styles.modalTitle}>{activeArticle.title}</h3>
                  </div>
                  <button
                    type="button"
                    className={styles.modalCloseBtn}
                    onClick={() => setActiveArticle(null)}
                    aria-label="Close Article Modal"
                  >
                    ✕
                  </button>
                </div>

                <div className={styles.modalContent}>
                  {activeArticle.fullBody}

                  <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--border-color, #e2e8f0)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                    <Link
                      to="/courses"
                      className="btn btn-primary btn-sm"
                      onClick={() => setActiveArticle(null)}
                    >
                      Explore Cohorts →
                    </Link>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => setActiveArticle(null)}
                    >
                      Close Guide
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
