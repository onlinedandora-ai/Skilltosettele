import React from "react";
import styles from "./HiringPartners.module.css";

interface Partner {
  name: string;
  category: string;
  rolesHired: string;
  logo: React.ReactNode;
}

const PARTNERS: Partner[] = [
  {
    name: "Microsoft",
    category: "Cloud & DevOps",
    rolesHired: "DevOps & Cloud Engineers",
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-label="Microsoft Logo">
        <rect x="1" y="1" width="10" height="10" fill="#F25022" rx="1" />
        <rect x="13" y="1" width="10" height="10" fill="#7FBA00" rx="1" />
        <rect x="1" y="13" width="10" height="10" fill="#00A4EF" rx="1" />
        <rect x="13" y="13" width="10" height="10" fill="#FFB900" rx="1" />
      </svg>
    ),
  },
  {
    name: "Amazon AWS",
    category: "AWS & Big Data",
    rolesHired: "Solutions Architects",
    logo: (
      <svg viewBox="0 0 42 24" width="42" height="24" fill="none" aria-label="Amazon AWS Logo">
        <text x="2" y="14" fill="currentColor" fontWeight="900" fontSize="13" fontFamily="sans-serif" letterSpacing="-0.5">aws</text>
        <path d="M4 17.5C12 21.5 22 21.5 30 17.5" stroke="#FF9900" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M28 15.5L32 17.5L29 20" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    category: "Data & AI",
    rolesHired: "ML & Data Engineers",
    logo: (
      <svg viewBox="0 0 32 24" width="34" height="24" fill="none" aria-label="Google Cloud Logo">
        <path d="M22 10A5.5 5.5 0 0 0 11.5 8.5 7 7 0 0 0 5 15C5 18.5 7.9 21 11.5 21H22a5 5 0 0 0 .5-10z" fill="#4285F4" opacity="0.85" />
        <path d="M22 10A5.5 5.5 0 0 0 17 5a5.5 5.5 0 0 0-5.5 3.5" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="15.5" r="4.2" fill="#34A853" />
        <circle cx="11.5" cy="17" r="2.8" fill="#FBBC05" />
      </svg>
    ),
  },
  {
    name: "Deloitte",
    category: "Analytics & Cyber",
    rolesHired: "SOC & Security Analysts",
    logo: (
      <svg viewBox="0 0 74 24" width="68" height="22" fill="none" aria-label="Deloitte Logo">
        <text x="0" y="16.5" fill="currentColor" fontWeight="800" fontSize="14" fontFamily="sans-serif" letterSpacing="-0.4">Deloitte</text>
        <circle cx="58.5" cy="15.5" r="2.6" fill="#86BC25" />
      </svg>
    ),
  },
  {
    name: "Accenture",
    category: "Enterprise Systems",
    rolesHired: "Full Stack & QA Leads",
    logo: (
      <svg viewBox="0 0 76 24" width="70" height="22" fill="none" aria-label="Accenture Logo">
        <path d="M20 4L25.5 8.5L20 13" stroke="#A100FF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="0" y="19" fill="currentColor" fontWeight="800" fontSize="12" fontFamily="sans-serif" letterSpacing="-0.2">accenture</text>
      </svg>
    ),
  },
  {
    name: "Oracle",
    category: "Database & Cloud",
    rolesHired: "Database Architects",
    logo: (
      <svg viewBox="0 0 72 24" width="66" height="22" fill="none" aria-label="Oracle Logo">
        <rect x="2" y="4.5" width="16" height="14.5" rx="7.2" stroke="#C74634" strokeWidth="2.8" />
        <text x="23" y="16.5" fill="#C74634" fontWeight="800" fontSize="13" fontFamily="sans-serif" letterSpacing="0.4">ORACLE</text>
      </svg>
    ),
  },
  {
    name: "TCS",
    category: "Global Delivery",
    rolesHired: "Software Engineers",
    logo: (
      <svg viewBox="0 0 56 24" width="52" height="22" fill="none" aria-label="Tata Consultancy Services Logo">
        <rect x="1" y="2" width="54" height="20" rx="4" fill="#0F2D69" />
        <text x="9" y="16.5" fill="#FFFFFF" fontWeight="900" fontSize="13.5" fontFamily="sans-serif" letterSpacing="1.4">TCS</text>
      </svg>
    ),
  },
  {
    name: "Infosys",
    category: "AI & Automation",
    rolesHired: "Data Scientists & Devs",
    logo: (
      <svg viewBox="0 0 68 24" width="62" height="22" fill="none" aria-label="Infosys Logo">
        <text x="1" y="16.5" fill="#007CC3" fontWeight="800" fontSize="15" fontFamily="sans-serif" letterSpacing="-0.5">Infosys</text>
      </svg>
    ),
  },
  {
    name: "Cognizant",
    category: "Digital Engineering",
    rolesHired: "Cloud Automation Leads",
    logo: (
      <svg viewBox="0 0 78 24" width="72" height="22" fill="none" aria-label="Cognizant Logo">
        <circle cx="10" cy="12" r="8" stroke="#0033A0" strokeWidth="2.2" />
        <path d="M6 12C6 9.8 7.8 8 10 8" stroke="#00A3E0" strokeWidth="2.4" strokeLinecap="round" />
        <text x="23" y="16.5" fill="currentColor" fontWeight="800" fontSize="12" fontFamily="sans-serif" letterSpacing="-0.2">Cognizant</text>
      </svg>
    ),
  },
  {
    name: "Wipro",
    category: "Cyber & Tech",
    rolesHired: "SOC & Incident Responders",
    logo: (
      <svg viewBox="0 0 64 24" width="58" height="22" fill="none" aria-label="Wipro Logo">
        <circle cx="8" cy="8" r="2.2" fill="#E01A22" />
        <circle cx="13" cy="6" r="2.5" fill="#F29100" />
        <circle cx="17" cy="10" r="2.2" fill="#78BE20" />
        <circle cx="15" cy="15" r="2.2" fill="#00A3E0" />
        <circle cx="10" cy="14" r="2.4" fill="#7B2D82" />
        <text x="24" y="16.5" fill="currentColor" fontWeight="800" fontSize="13" fontFamily="sans-serif">wipro</text>
      </svg>
    ),
  },
  {
    name: "Capgemini",
    category: "Data Insights",
    rolesHired: "Power BI & SQL Analysts",
    logo: (
      <svg viewBox="0 0 80 24" width="74" height="22" fill="none" aria-label="Capgemini Logo">
        <path d="M9 5C7 8 5 10 5 12C5 14 7 15 9 15C11 15 13 14 13 12C13 10 11 8 9 5Z" fill="#0070AD" />
        <path d="M8 15L7 18H11L10 15" fill="#0070AD" />
        <text x="18" y="16" fill="currentColor" fontWeight="800" fontSize="11" fontFamily="sans-serif" letterSpacing="-0.2">Capgemini</text>
      </svg>
    ),
  },
  {
    name: "Cisco",
    category: "Security & Networks",
    rolesHired: "Network Security Leads",
    logo: (
      <svg viewBox="0 0 62 24" width="56" height="22" fill="none" aria-label="Cisco Logo">
        <line x1="3" y1="12" x2="3" y2="17" stroke="#049FD9" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="7" y1="8" x2="7" y2="17" stroke="#049FD9" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="11" y1="5" x2="11" y2="17" stroke="#049FD9" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="15" y1="8" x2="15" y2="17" stroke="#049FD9" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="19" y1="12" x2="19" y2="17" stroke="#049FD9" strokeWidth="2.2" strokeLinecap="round" />
        <text x="24" y="16.5" fill="#049FD9" fontWeight="900" fontSize="12.5" fontFamily="sans-serif" letterSpacing="0.8">CISCO</text>
      </svg>
    ),
  },
];

export default function HiringPartners() {
  return (
    <section className={styles.section} aria-label="Brands Who Trust and Hire SkilltoSettle Graduates">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span>✦ VERIFIED HIRING ECOSYSTEM · TOP TECH EMPLOYERS</span>
          </div>
          <h2 className={styles.title}>Brands Who Trust &amp; Hire SkilltoSettle Graduates</h2>
          <p className={styles.subtitle}>
            Our alumni work at world-class technology organizations and high-growth enterprises across India and the USA with an average <strong>+95% compensation jump</strong> and dedicated <strong>100% Placement Assistance</strong>.
          </p>
        </div>

        {/* 12-Partner Grid with Authentic Logos */}
        <div className={styles.logosGrid}>
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className={styles.logoCard}>
              <div className={styles.logoWrapper}>{partner.logo}</div>
              <span className={styles.companyName}>{partner.name}</span>
              <span className={styles.hiringTag}>{partner.category}</span>
            </div>
          ))}
        </div>

        {/* Placement Trust Ribbon */}
        <div className={styles.statsRibbon}>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonIcon}>🏢</span>
            <span className={styles.ribbonLabel}>350+ Active Hiring Companies (India &amp; USA)</span>
          </div>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonIcon}>💰</span>
            <span className={styles.ribbonLabel}>₹14.5 LPA Average Placed Tech Package</span>
          </div>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonIcon}>🎯</span>
            <span className={styles.ribbonLabel}>100% Placement Assistance &amp; Direct Referrals</span>
          </div>
        </div>
      </div>
    </section>
  );
}
