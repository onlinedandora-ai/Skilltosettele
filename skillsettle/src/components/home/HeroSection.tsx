import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

interface CareerTrack {
  id: string;
  role: string;
  salary: string;
  hike: string;
  duration: string;
  icon: string;
  tags: string[];
  project: string;
  batch: string;
  slug: string;
}

export default function HeroSection() {
  const [activeTrack, setActiveTrack] = useState<string>("devops");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tracks: Record<string, CareerTrack> = {
    devops: {
      id: "devops",
      role: "DevOps & Cloud Architect",
      salary: "₹12–22 LPA",
      hike: "+92% Avg Hike",
      duration: "4.5 Months",
      icon: "☁️",
      tags: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD AI", "Linux"],
      project: "Multi-Region Zero-Downtime EKS Cluster Deployment with ArgoCD & Prometheus",
      batch: "Starts Sept 15 • 6 Seats Left",
      slug: "devops-with-ai",
    },
    ai_data: {
      id: "ai_data",
      role: "AI & Data Engineer",
      salary: "₹10–20 LPA",
      hike: "+85% Avg Hike",
      duration: "4 Months",
      icon: "🧠",
      tags: ["Python", "Machine Learning", "Power BI", "SQL", "LLMs", "RAG"],
      project: "Production Generative AI Assistant with LangChain, OpenAI & Vector DB",
      batch: "Starts Sept 20 • 4 Seats Left",
      slug: "data-analytics-sql",
    },
    fullstack: {
      id: "fullstack",
      role: "Full Stack Developer",
      salary: "₹8–16 LPA",
      hike: "+78% Avg Hike",
      duration: "5 Months",
      icon: "💻",
      tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker"],
      project: "Production SaaS App with Real-time WebSockets, Stripe & Redis Caching",
      batch: "Starts Sept 18 • 8 Seats Left",
      slug: "web-development",
    },
    business: {
      id: "business",
      role: "Business & Agile Analyst",
      salary: "₹9–15 LPA",
      hike: "+70% Avg Hike",
      duration: "3.5 Months",
      icon: "📊",
      tags: ["Agile/Scrum", "Jira", "SQL", "Tableau", "BRD / FRD", "UML"],
      project: "Fintech Enterprise Payment Flow Re-engineering & KPI Dashboarding",
      batch: "Starts Sept 22 • 5 Seats Left",
      slug: "business-analyst",
    },
  };

  const current = tracks[activeTrack];

  const quickPills = [
    { label: "Cloud & DevOps", key: "devops" },
    { label: "AI & Data Science", key: "ai_data" },
    { label: "Full Stack Dev", key: "fullstack" },
    { label: "Business Analyst", key: "business" },
  ];

  return (
    <section className={styles.heroSection}>
      {/* Light sky gradient background decoration */}
      <div className={styles.glowSky}></div>

      {/* Top Banner Tagline */}
      <div className="container">
        <div className={styles.topTaglineBanner}>
          <h2 className={styles.bannerHeadline}>
            For every student, every classroom. <span className={styles.bannerHighlight}>Real results.</span>
          </h2>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left Column: Headline, Search & CTAs */}
        <div className={styles.leftCol}>
          <div className="section-eyebrow teal">
            <span>✨</span>
            <span>INDUSTRY-LED LIVE ACCELERATOR</span>
          </div>

          <h1 className={styles.headline}>
            Master In-Demand Skills. <br />
            <span className="text-gradient">Settle Your Dream Career.</span>
          </h1>

          <p className={styles.subheadline}>
            Learn through live cohort training, production-ready capstone architectures, and 1-on-1 mentorship — built to transition you into high-paying tech roles.
          </p>

          {/* Search Box & Quick Pills */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search courses, skills, or job roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <Link
                to={searchQuery ? `/courses?search=${encodeURIComponent(searchQuery)}` : `/courses`}
                className={`btn btn-primary btn-sm ${styles.searchBtn}`}
              >
                Explore Courses
              </Link>
            </div>

            {/* Quick Filter Tag Pills */}
            <div className={styles.pillsRow}>
              <span className={styles.pillsLabel}>Popular Tracks:</span>
              <div className={styles.pillsList}>
                {quickPills.map((pill) => (
                  <button
                    key={pill.key}
                    type="button"
                    className={`${styles.pillBtn} ${activeTrack === pill.key ? styles.pillActive : ""}`}
                    onClick={() => setActiveTrack(pill.key)}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <Link to="/career-finder" className="btn btn-teal btn-lg">
              <span>🎯</span> Find My Career Path →
            </Link>
            <Link to="/courses" className="btn btn-outline btn-lg">
              Browse 100+ Courses
            </Link>
          </div>

          {/* Social Proof */}
          <div className={styles.trustProof}>
            <div className={styles.avatarStack}>
              <div className={styles.avatar} style={{ background: "#0ea5e9" }}>VR</div>
              <div className={styles.avatar} style={{ background: "#00a8cc" }}>PS</div>
              <div className={styles.avatar} style={{ background: "#f59e0b" }}>AK</div>
              <div className={styles.avatar} style={{ background: "#6366f1" }}>MN</div>
              <div className={styles.avatarCount}>+1.2k</div>
            </div>
            <div className={styles.proofText}>
              <div className={styles.starsRow}>★★★★★ <span>4.9/5 Rating</span></div>
              <div className={styles.proofSub}>Alumni placed at Google, Microsoft, Amazon, Infosys</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Role Simulation Card */}
        <div className={styles.rightCol}>
          <div className={styles.interactiveWidget}>
            {/* Widget Top Header */}
            <div className={styles.widgetHeader}>
              <div className={styles.liveIndicator}>
                <span className={styles.liveDot}></span>
                <span>CAREER TRACK EXPLORER</span>
              </div>
              <span className={styles.liveBatchTag}>{current.batch}</span>
            </div>

            {/* Role Simulator Tabs */}
            <div className={styles.roleTabs} role="tablist" aria-label="Career Track Tabs">
              {Object.values(tracks).map((t) => {
                const isActive = activeTrack === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${styles.roleTabBtn} ${isActive ? styles.roleTabActive : ""}`}
                    onClick={() => setActiveTrack(t.id)}
                  >
                    <span className={styles.tabIcon}>{t.icon}</span>
                    <span className={styles.tabLabel}>{t.role.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Track Highlight Card */}
            <div className={styles.trackCard}>
              <div className={styles.trackTop}>
                <div className={styles.trackMain}>
                  <div className={styles.trackIconWrap}>{current.icon}</div>
                  <div>
                    <h3 className={styles.trackRole}>{current.role}</h3>
                    <span className={styles.trackDuration}>⏱ {current.duration} Cohort • Live Mentorship</span>
                  </div>
                </div>
                <div className={styles.salaryBadge}>
                  <span className={styles.salaryLabel}>Target CTC</span>
                  <span className={styles.salaryVal}>{current.salary}</span>
                  <span className={styles.hikeVal}>{current.hike}</span>
                </div>
              </div>

              {/* Core Stack Mastered */}
              <div className={styles.techBlock}>
                <span className={styles.blockLabel}>Core Stack Mastered:</span>
                <div className={styles.tagsContainer}>
                  {current.tags.map((tag, i) => (
                    <span key={i} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capstone Project Showcase */}
              <div className={styles.capstoneBlock}>
                <div className={styles.capstoneHeader}>
                  <span className={styles.capstoneIcon}>🚀</span>
                  <span className={styles.capstoneLabel}>Featured Portfolio Capstone:</span>
                </div>
                <p className={styles.capstoneText}>{current.project}</p>
              </div>

              {/* Track Action Link */}
              <div className={styles.trackFooter}>
                <Link to={`/courses/${current.slug}`} className="btn btn-primary btn-sm w-full">
                  Explore {current.role} Curriculum →
                </Link>
              </div>
            </div>

            {/* Bottom Proof Metrics */}
            <div className={styles.widgetStats}>
              <div className={styles.widgetStatItem}>
                <span className={styles.wStatNum}>100%</span>
                <span className={styles.wStatLabel}>Hands-on Labs</span>
              </div>
              <div className={styles.wStatDivider}></div>
              <div className={styles.widgetStatItem}>
                <span className={styles.wStatNum}>1-on-1</span>
                <span className={styles.wStatLabel}>Mentor Reviews</span>
              </div>
              <div className={styles.wStatDivider}></div>
              <div className={styles.widgetStatItem}>
                <span className={styles.wStatNum}>100+</span>
                <span className={styles.wStatLabel}>Hiring Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
