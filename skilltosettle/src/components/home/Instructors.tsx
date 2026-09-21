import React from "react";
import { Link } from "react-router-dom";
import { instructors } from "@/data/instructors";
import { getWhatsAppUrl } from "@/utils/constants";
import styles from "./Instructors.module.css";

export default function Instructors() {
  const mentorTracks: Record<string, { track: string; color: string; bg: string; initials: string; gradient: string }> = {
    suresh: { track: "🛡️ Cyber Security Lead", color: "#0284c7", bg: "#e0f2fe", initials: "SU", gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)" },
    nikhil: { track: "📊 Data Science & AI Lead", color: "#b45309", bg: "#fef3c7", initials: "NK", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
    kiran: { track: "⚡ DSA & Systems Lead", color: "#6d28d9", bg: "#ede9fe", initials: "KI", gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)" },
    eswar: { track: "☁️ DevOps with AI Lead", color: "#0369a1", bg: "#f0f9ff", initials: "ES", gradient: "linear-gradient(135deg, #0284c7, #06b6d4)" },
    narendra: { track: "📈 SQL & Database Lead", color: "#6366f1", bg: "rgba(99, 102, 241, 0.12)", initials: "NA", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)" },
    shyam: { track: "💼 Business Analyst Lead", color: "#0f766e", bg: "#ccfbf1", initials: "SH", gradient: "linear-gradient(135deg, #0d9488, #059669)" },
    gurpreet: { track: "🌍 IELTS 7.5+ Master Coach", color: "#15803d", bg: "#dcfce7", initials: "GU", gradient: "linear-gradient(135deg, #10b981, #047857)" },
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>PRACTITIONER-LED MENTORSHIP</span>
          </div>
          <h2 className="text-h2">Learn Directly From Industry Practitioners</h2>
          <p className="text-body-lg">
            Every cohort is taught live by senior technology architects and corporate leaders who mentor you through real enterprise architectures, live coding, and interview rounds.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", padding: "6px 14px", borderRadius: "999px", fontSize: "clamp(0.68rem, 2.5vw, 0.82rem)", fontWeight: 700, marginTop: "12px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center", flexWrap: "wrap" }}>
            <span>🎓</span>
            <span>COURSE COMPLETION CERTIFICATE INCLUDED • MENTOR-AUTHORIZED CREDENTIALS</span>
          </div>
        </div>

        <div className={styles.grid}>
          {instructors.map((inst) => {
            const trackInfo = mentorTracks[inst.slug] || { track: inst.specialization, color: "#009bb9", bg: "rgba(0, 155, 185, 0.1)", initials: inst.name.slice(0, 2).toUpperCase(), gradient: "linear-gradient(135deg, #009bb9, #0284c7)" };
            return (
              <div key={inst.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.avatarWrap}>
                    {inst.avatar ? (
                      <img
                        src={inst.avatar}
                        alt={inst.name}
                        className={styles.avatarImg}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.avatar} style={{ background: trackInfo.gradient }}>
                        {trackInfo.initials}
                      </div>
                    )}
                    <span className={styles.verifiedBadge} title="Verified Lead Mentor">✓</span>
                  </div>
                  <div className={styles.instMeta}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                      <h3 className={styles.name}>{inst.name}</h3>
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, color: trackInfo.color, background: trackInfo.bg, padding: "3px 9px", borderRadius: "999px" }}>
                        {trackInfo.track}
                      </span>
                    </div>
                    <p className={styles.title}>{inst.title}</p>
                    <span className={styles.expBadge}>{inst.experience}</span>
                  </div>
                </div>

                <p className={styles.bio}>{inst.bio}</p>

                {/* Specialization Chips */}
                <div className={styles.skillsSection}>
                  <span className={styles.skillsLabel}>Core Tech Stack:</span>
                  <div className={styles.skillsList}>
                    {inst.skills.slice(0, 5).map((s, i) => (
                      <span key={i} className={styles.skillTag}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Courses taught */}
                <div className={styles.coursesSection}>
                  <span className={styles.coursesLabel}>Flagship Live Cohort:</span>
                  <div className={styles.coursesList}>
                    {inst.courses.map((c, i) => (
                      <span key={i} className={styles.coursePill}>
                        • {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.studentStat}>
                    <strong>{inst.studentsCount.toLocaleString()}+</strong> Students Trained
                  </span>
                  <a
                    href={getWhatsAppUrl(`Hi ${inst.name}! I would like to consult with you directly regarding the ${inst.courses[0]} cohort.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waMentorBtn}
                  >
                    <span>💬 WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.footerWrap} style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link to="/instructors" className="btn btn-outline btn-md">
            Meet Mentors →
          </Link>
          <a
            href={getWhatsAppUrl("Hi! I would like to schedule a 1-on-1 profile evaluation with an admissions instructor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-md"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <span>💬</span>
            <span>Book Evaluation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
