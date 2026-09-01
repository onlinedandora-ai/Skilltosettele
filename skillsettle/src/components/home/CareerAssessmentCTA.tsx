import React, { useState } from "react";
import styles from "./CareerAssessmentCTA.module.css";

export default function CareerAssessmentCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "Switch into Tech",
    domain: "Cloud & DevOps",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi! I completed the Career Assessment form.\nName: ${formData.name}\nGoal: ${formData.goal}\nDomain: ${formData.domain}\nPhone: ${formData.phone}\nCan you recommend the best learning path?`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.leftCol}>
            <div className="section-eyebrow teal">
              <span>🎯</span>
              <span>FREE CAREER ASSESSMENT</span>
            </div>
            <h2 className={styles.title}>Not Sure Which Path Fits You Best?</h2>
            <p className={styles.desc}>
              Get a personalized, 1-on-1 skill analysis and curated learning roadmap from our senior mentors. No pushy sales calls — just honest career guidance.
            </p>

            <div className={styles.checklist}>
              <div className={styles.checkItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Evaluate your current background & salary bracket</span>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Get a month-by-month tech learning roadmap</span>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Discover which skills are commanding the highest hikes in 2026</span>
              </div>
            </div>

            <div className={styles.trustNote}>
              <span className={styles.lockIcon}>🔒</span>
              <span>Your contact details are 100% private. Zero spam guarantee.</span>
            </div>
          </div>

          <div className={styles.rightCol}>
            {submitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIcon}>🎉</div>
                <h3 className={styles.successTitle}>Assessment Received!</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.name}</strong>. Based on your goal to <strong>{formData.goal}</strong> in <strong>{formData.domain}</strong>, our senior counselor is preparing your roadmap.
                </p>
                <button onClick={handleWhatsAppDirect} className="btn btn-teal w-full mt-md">
                  💬 Chat on WhatsApp for Instant Roadmap →
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Get Your Free Recommendation</h3>
                <p className={styles.formSub}>Takes under 60 seconds</p>

                <div className={styles.formGroup}>
                  <label className="label" htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.grid2}>
                  <div className={styles.formGroup}>
                    <label className="label" htmlFor="emailAddress">Email Address</label>
                    <input
                      id="emailAddress"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className="label" htmlFor="whatsappNumber">WhatsApp Number</label>
                    <input
                      id="whatsappNumber"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.grid2}>
                  <div className={styles.formGroup}>
                    <label className="label" htmlFor="primaryGoal">Primary Goal</label>
                    <select
                      id="primaryGoal"
                      className="input"
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    >
                      <option value="Get First Tech Job">Get First Tech Job</option>
                      <option value="Switch into Tech">Switch into Tech</option>
                      <option value="Promotion & Upskilling">Promotion & Upskilling</option>
                      <option value="Global / IELTS Prep">Global / IELTS Prep</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className="label" htmlFor="domainInterest">Area of Interest</label>
                    <select
                      id="domainInterest"
                      className="input"
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    >
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="AI & Data Analytics">AI & Data Analytics</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Business Analysis">Business Analysis</option>
                      <option value="Software Development">Software Development</option>
                      <option value="IELTS / Global Careers">IELTS / Global Careers</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-full btn-lg mt-sm">
                  Get My Personalized Roadmap →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
