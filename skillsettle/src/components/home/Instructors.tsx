import React from "react";
import { Link } from "react-router-dom";
import { instructors } from "@/data/instructors";
import styles from "./Instructors.module.css";

export default function Instructors() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>👨‍🏫</span>
            <span>PRACTITIONER-LED MENTORSHIP</span>
          </div>
          <h2 className="text-h2">Learn From People Who&apos;ve Done It</h2>
          <p className="text-body-lg">
            No academic theorists. Our mentors are senior engineers, architects, and business leads currently driving real-world technology transformations.
          </p>
        </div>

        <div className={styles.grid}>
          {instructors.map((inst) => (
            <div key={inst.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{inst.name.charAt(0)}</div>
                <div className={styles.instMeta}>
                  <h3 className={styles.name}>{inst.name}</h3>
                  <p className={styles.title}>{inst.title}</p>
                  <span className={styles.expBadge}>💼 {inst.experience}</span>
                </div>
              </div>

              <p className={styles.bio}>{inst.bio}</p>

              {/* Specialization Chips */}
              <div className={styles.skillsSection}>
                <span className={styles.skillsLabel}>Domain Expertise:</span>
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
                <span className={styles.coursesLabel}>Cohorts Mentored:</span>
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
                  🎓 <strong>{inst.studentsCount.toLocaleString()}+</strong> Students Trained
                </span>
                <Link to="/instructors" className={styles.profileLink}>
                  Full Bio →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerWrap}>
          <Link to="/instructors" className="btn btn-outline btn-md">
            Meet All Lead Instructors →
          </Link>
        </div>
      </div>
    </section>
  );
}
