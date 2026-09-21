import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import styles from "./HeroSection.module.css";
import { getWhatsAppUrl } from "@/utils/constants";

interface CareerTrack {
  id: string;
  role: string;
  tabShort: string;
  mentor: string;
  mentorTitle: string;
  salary: string;
  hike: string;
  duration: string;
  tags: string[];
  project: string;
  batch: string;
  slug: string;
  badge: string;
  image: string;
}

export default function HeroSection() {
  const [activeTrack, setActiveTrack] = useState<string>("devops");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tracks: Record<string, CareerTrack> = {
    devops: {
      id: "devops",
      role: "DevOps with AI & Cloud",
      tabShort: "⚡ DevOps",
      mentor: "Eswar",
      mentorTitle: "DevOps & Cloud Architect",
      salary: "₹14–24 LPA",
      hike: "+95% Avg Hike",
      duration: "12 Weeks Cohort",
      tags: ["DevOps with AI", "AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "ArgoCD"],
      project: "Production Multi-Region EKS Deployment with AI Automated CI/CD & ArgoCD",
      batch: "Starts Sept 15 • 8 Seats Left",
      slug: "devops-with-ai",
      badge: "Bestseller 🔥",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop&q=80",
    },
    sql: {
      id: "sql",
      role: "SQL & Data Analytics",
      tabShort: "📊 SQL",
      mentor: "Narendra",
      mentorTitle: "Principal Database Architect",
      salary: "₹8–16 LPA",
      hike: "+85% Avg Hike",
      duration: "8 Weeks Cohort",
      tags: ["SQL", "PostgreSQL", "MySQL", "Window Functions", "Query Tuning", "Analytics"],
      project: "E-Commerce Multi-Million Row PostgreSQL Analytics & Customer Retention Suite",
      batch: "Starts Sept 10 • 8 Seats Left",
      slug: "sql-database-analytics",
      badge: "Top Rated ⭐",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    },
    ml: {
      id: "ml",
      role: "Machine Learning & AI",
      tabShort: "🤖 ML & AI",
      mentor: "Nikhil",
      mentorTitle: "Lead AI Scientist",
      salary: "₹15–28 LPA",
      hike: "+110% Avg Hike",
      duration: "14 Weeks Cohort",
      tags: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "NLP", "MLOps"],
      project: "End-to-End Predictive Churn Engine with FastAPI Cloud Model Serving",
      batch: "Starts Sept 22 • 5 Seats Left",
      slug: "machine-learning-ai",
      badge: "Trending 🚀",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80",
    },
    ba: {
      id: "ba",
      role: "Business Analyst (BA)",
      tabShort: "💼 BA",
      mentor: "Shyam",
      mentorTitle: "Lead BA & Agile Consultant",
      salary: "₹9–18 LPA",
      hike: "+75% Avg Hike",
      duration: "10 Weeks Cohort",
      tags: ["Business Analysis", "Agile/Scrum", "JIRA", "BRD / FRD", "SQL", "Power BI"],
      project: "Fintech Banking Portal BRD, Sprint Epics & Executive Power BI Dashboard",
      batch: "Starts Sept 18 • 7 Seats Left",
      slug: "business-analyst",
      badge: "High Placement 💼",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
    },
    ielts: {
      id: "ielts",
      role: "IELTS 7.5+ Band Coaching",
      tabShort: "🌐 IELTS",
      mentor: "Gurpreet",
      mentorTitle: "Master IELTS Coach",
      salary: "Global Visas / Study",
      hike: "Band 7.5+ Guaranteed",
      duration: "6 Weeks Cohort",
      tags: ["IELTS", "Speaking Fluency", "Writing Task 1 & 2", "Mock Tests", "Global English"],
      project: "Proctored IELTS Mock Rounds, 1-on-1 Essay Evaluations & Accent Coaching",
      batch: "Starts Sept 8 • 12 Seats Left",
      slug: "ielts-preparation",
      badge: "Global Ready 🌟",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    },
  };

  const current = tracks[activeTrack] || tracks.devops;

  const quickPills = [
    { label: "⚡ DevOps with AI (Eswar)", key: "devops" },
    { label: "📊 SQL (Narendra)", key: "sql" },
    { label: "🤖 Machine Learning (Nikhil)", key: "ml" },
    { label: "💼 Business Analyst (Shyam)", key: "ba" },
    { label: "🌐 IELTS (Gurpreet)", key: "ielts" },
  ];

  const flagshipTrackList = [tracks.devops, tracks.sql, tracks.ml, tracks.ba, tracks.ielts];

  return (
    <section className={styles.heroSection}>
      {/* Light sky gradient background decoration */}
      <div className={styles.glowSky}></div>

      {/* Top Banner Tagline with Student Hero Image */}
      <div className="container">
        <div className={styles.topTaglineBanner}>
          <div className={styles.bannerImageWrap}>
            <img
              src="/images/hero-student.jpg"
              alt="SkilltoSettle Student"
              className={styles.bannerImg}
            />
          </div>
          <div className={styles.bannerTextWrap}>
            <h2 className={styles.bannerHeadline}>
              <span>For ambitious students &amp; future tech leaders across India.</span>
              <span className={styles.bannerAccent}>Real skills. Real Jobs.</span>
            </h2>
            <p className={styles.bannerSub}>
              Master high-demand tech skills with live 1-on-1 mentor guidance from Eswar, Narendra, Nikhil, Shyam, and Gurpreet.
            </p>
            <div className={styles.bannerBtns}>
              <Link to="/courses" className={styles.bannerCohortBtn}>
                Explore Cohorts
              </Link>
              <a
                href={getWhatsAppUrl("Hi! I would like to chat with an admissions counselor regarding the 5 flagship cohorts.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bannerWhatsAppBtn}
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left Column: Headline, Search & CTAs */}
        <div className={styles.leftCol}>
          <div className={styles.heroThreeBadges}>
            <span className={styles.heroPillBlue}>
              <span>🚀</span>
              <span>100% LIVE PRACTITIONER-LED COHORTS</span>
            </span>
            <span className={styles.heroPillGold}>
              <span>🎓</span>
              <span>COURSE COMPLETION CERTIFICATE INCLUDED</span>
            </span>
          </div>

          <h1 className={styles.headline}>
            Master In-Demand Tech Skills. <br />
            <span style={{ color: "#009bb9" }}>Launch Your Dream Career.</span>
          </h1>

          <p className={styles.subheadline}>
            Join live cohort batches mentored by proven industry architects: <strong>DevOps with AI</strong> (Eswar), <strong>SQL</strong> (Narendra), <strong>Machine Learning</strong> (Nikhil), <strong>Business Analyst</strong> (Shyam), and <strong>IELTS</strong> (Gurpreet). Build portfolio-ready capstones and crack top tech interviews.
          </p>

          {/* Search Box & Quick Pills */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search courses or mentors (DevOps, SQL, ML, BA, IELTS)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <Link
                to={searchQuery ? `/courses?search=${encodeURIComponent(searchQuery)}` : `/courses`}
                className={`btn btn-primary btn-sm ${styles.searchBtn}`}
              >
                Explore
              </Link>
            </div>

            {/* Quick Filter Tag Pills */}
            <div className={styles.pillsRow}>
              <span className={styles.pillsLabel}>5 Flagship Tracks:</span>
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
            <Link to="/career-finder" className={styles.careerFinderBtn}>
              <span>Career Finder →</span>
            </Link>
            <a
              href={getWhatsAppUrl(`Hi! I'm interested in the ${current.role} program led by ${current.mentor}. Please share batch details and syllabus.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCtaBtn}
            >
              <span className={styles.whatsappIconWrap}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.134.301-.351.452-.527.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.076-.15-.678-1.636-.93-2.241-.244-.589-.493-.509-.678-.519l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.512 1.08 2.912 1.23 3.113c.15.2 2.126 3.246 5.15 4.553.72.31 1.282.495 1.72.634.723.23 1.38.197 1.9.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.075-.126-.276-.201-.577-.351z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.434 5.176L2.05 21.65a.75.75 0 00.923.923l4.474-1.384A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-8.5 10c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5a8.47 8.47 0 01-4.322-1.18.75.75 0 00-.59-.074l-3.328 1.029 1.03-3.328a.75.75 0 00-.074-.59A8.47 8.47 0 013.5 12z" />
                </svg>
              </span>
              <span className={styles.whatsappTextWrap}>
                <span className={styles.whatsappTitle}>WhatsApp Desk</span>
                <span className={styles.whatsappPhone}>(+1 832-936-7679)</span>
              </span>
            </a>
          </div>

          {/* Social Proof with Real Student Photos */}
          <div className={styles.trustProof}>
            <div className={styles.avatarStack}>
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&auto=format&fit=crop&q=80" alt="SkilltoSettle Graduate" className={styles.avatarPhoto} />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80" alt="SkilltoSettle Graduate" className={styles.avatarPhoto} />
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80" alt="SkilltoSettle Graduate" className={styles.avatarPhoto} />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80" alt="SkilltoSettle Graduate" className={styles.avatarPhoto} />
              <div className={styles.avatarCount}>+3.5k</div>
            </div>
            <div className={styles.proofText}>
              <div className={styles.starsRow}>★★★★★ <span>4.9/5 Rating from 3,500+ Students</span></div>
              <div className={styles.proofSub}>Indian students &amp; alumni working at TCS, Infosys, Wipro, Amazon, Deloitte &amp; Top Startups</div>
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
                <span>CAREER TRACK PREVIEW</span>
              </div>
              <span className={styles.liveBatchTag}>{current.batch}</span>
            </div>

            {/* Role Simulator Tabs */}
            <div className={styles.roleTabs} role="tablist" aria-label="Career Track Tabs">
              {flagshipTrackList.map((t) => {
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
                    <span className={styles.tabLabel}>{t.tabShort}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Track Highlight Card with Smooth Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={styles.trackCard}
              >
                {/* Media Preview Banner */}
                <div className={styles.trackMediaPreview}>
                  <img src={current.image} alt={current.role} className={styles.trackMediaImg} />
                  <div className={styles.trackMediaOverlay}></div>
                  <div className={styles.trackMentorBadge}>
                    <div className={styles.trackMentorInitials}>{current.mentor.charAt(0)}</div>
                    <span>Lead Mentor: {current.mentor} ({current.mentorTitle})</span>
                  </div>
                </div>

                <div className={styles.trackTop}>
                  <div className={styles.trackMain}>
                    <div className={styles.trackHeaderRow}>
                      <span className={styles.trackBadge}>{current.badge}</span>
                      <div className={styles.salaryBadgeMobile}>
                        <span className={styles.salaryVal}>{current.salary}</span>
                        <span className={styles.hikeVal}>{current.hike}</span>
                      </div>
                    </div>

                    <h3 className={styles.trackRole}>{current.role}</h3>

                    {/* Mentor Details */}
                    <div className={styles.trackMentorRow}>
                      <span className={styles.mentorName}>Mentor: {current.mentor}</span>
                      <span className={styles.mentorDivider}>•</span>
                      <span className={styles.mentorTitle}>{current.mentorTitle}</span>
                    </div>

                    {/* Course Metadata */}
                    <div className={styles.trackMetaFlex}>
                      <span className={styles.trackDurationPill}>
                        ⏱️ {current.duration}
                      </span>
                      <span className={styles.trackLivePill}>
                        <span className={styles.livePulseDot}></span>
                        <span>Live Mentorship</span>
                      </span>
                      <div className={styles.trackCertPill}>
                        <span className={styles.trackCertIcon}>🎓</span>
                        <span className={styles.trackCertText}>Course Completion Certificate Included</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Right Scope / Salary Badge */}
                  <div className={styles.salaryBadge}>
                    <span className={styles.salaryLabel}>Target Scope</span>
                    <span className={styles.salaryVal}>{current.salary}</span>
                    <span className={styles.hikeVal}>{current.hike}</span>
                  </div>
                </div>

                {/* Core Stack Mastered */}
                <div className={styles.techBlock}>
                  <span className={styles.blockLabel}>Key Skills &amp; Tools:</span>
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
                    <span className={styles.capstoneLabel}>Featured Portfolio Project:</span>
                  </div>
                  <p className={styles.capstoneText}>{current.project}</p>
                </div>

                {/* Track Action Link */}
                <div className={styles.trackFooter} style={{ display: "flex", gap: "8px" }}>
                  <Link to={`/courses/${current.slug}`} className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                    View Syllabus →
                  </Link>
                  <a
                    href={getWhatsAppUrl(`Hi ${current.mentor}! I am interested in your ${current.role} cohort at SkilltoSettle. Please share batch schedule.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    style={{ background: "#25D366", color: "#ffffff", fontWeight: 700, border: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

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
                <span className={styles.wStatNum}>350+</span>
                <span className={styles.wStatLabel}>Hiring Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
