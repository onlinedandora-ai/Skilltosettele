import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getWhatsAppUrl } from "@/utils/constants";
import { useSEO } from "@/utils/useSEO";
import styles from "./CareerFinder.module.css";

export default function CareerFinder() {
  useSEO({
    title: "2-Minute Tech Career Assessment | SkilltoSettle",
    description: "Take our 2-minute career assessment to find the high-growth tech path best suited to your background, interests, and salary goals in India & USA.",
    canonical: "https://skilltosettle.com/career-finder",
  });

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    profile: "",
    goal: "",
    interest: "",
    timeCommitment: "",
    name: "",
    email: "",
    phone: "",
  });

  const [completed, setCompleted] = useState(false);

  const step1Options = [
    { label: "College Student / Final Year", value: "student" },
    { label: "Recent Graduate (Looking for Job)", value: "graduate" },
    { label: "Working in Non-Tech / Operations", value: "non-tech" },
    { label: "Software / IT Engineer (Upskilling)", value: "tech" },
    { label: "Business / HR / Management", value: "management" },
  ];

  const step2Options = [
    { label: "Land My First Tech Job", value: "first-job" },
    { label: "Switch Careers Into Tech", value: "switch" },
    { label: "Get Promoted & Upgrade Salary", value: "grow" },
    { label: "Prepare for Overseas / Global Career", value: "global" },
  ];

  const step3Options = [
    { label: "Cloud, DevOps & Kubernetes", value: "cloud-devops", path: "DevOps & Cloud Architect", courseSlug: "devops-with-ai" },
    { label: "Data Analytics, SQL & Power BI", value: "data-analytics", path: "Data Analyst & BI Specialist", courseSlug: "data-analytics-sql" },
    { label: "Machine Learning & Python Engineering", value: "ml-engineering", path: "Machine Learning Engineer", courseSlug: "machine-learning-ai" },
    { label: "Business Analysis & Agile Management", value: "business", path: "Business Analyst & PMO", courseSlug: "business-analyst" },
    { label: "Microsoft Power Platform & Cloud", value: "microsoft", path: "Microsoft BI & Power Platform Developer", courseSlug: "power-bi" },
    { label: "IELTS & International Professional English", value: "global", path: "Global Career & IELTS 7.5+ Band", courseSlug: "ielts-preparation" },
  ];

  const step4Options = [
    { label: "3 – 5 Hours / Week (Weekend Cohort)", value: "light" },
    { label: "5 – 10 Hours / Week (Standard Pace)", value: "standard" },
    { label: "10+ Hours / Week (Fast-Track Boot Camp)", value: "fast" },
  ];

  const handleSelect = (field: string, val: string) => {
    setAnswers({ ...answers, [field]: val });
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  // Compute recommendation
  const matchedInterest = step3Options.find((o) => o.value === answers.interest) || step3Options[0];

  const handleWhatsAppRecommendation = () => {
    const text = `Hi! I completed the Career Assessment on SkilltoSettle.\nName: ${answers.name}\nGoal: ${answers.goal}\nRecommended Path: ${matchedInterest.path}\nI want to discuss batch dates & enrollment details.`;
    window.open(getWhatsAppUrl(text), "_blank");
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Header */}
          <div className={styles.quizHeader}>
            <div className="section-eyebrow teal">
              <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
            </div>
            <h1 className={styles.title}>Find Your Ideal Career Path in India &amp; USA</h1>
            <p className={styles.sub}>
              Answer 4 quick questions to receive a tailored tech roadmap backed by <strong>100% Placement Assistance</strong> across hiring networks in <strong>India and the USA</strong>.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", margin: "14px 0 20px" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 14px", borderRadius: "999px" }}>
                🎯 100% PLACEMENT ASSISTANCE
              </span>
              <span style={{ fontSize: "clamp(0.7rem, 2.8vw, 0.8rem)", fontWeight: 700, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "5px 14px", borderRadius: "999px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
                🎓 COURSE COMPLETION CERTIFICATE INCLUDED
              </span>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "5px 14px", borderRadius: "999px" }}>
                🇮🇳 INDIA &amp; 🇺🇸 USA HIRING
              </span>
            </div>

            {/* Progress Bar */}
            {!completed && (
              <div className={styles.progressContainer}>
                <div className={styles.progressSteps}>
                  <span>Step {step} of 4</span>
                  <span>{step === 4 ? "Final Step" : `${Math.round((step / 4) * 100)}% Completed`}</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressBarFill}
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Quiz Body */}
          <div className={styles.quizCard}>
            {!completed ? (
              <>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className={styles.stepBox}>
                    <h2 className={styles.stepQuestion}>What best describes your current profile?</h2>
                    <div className={styles.optionsGrid}>
                      {step1Options.map((opt) => (
                        <button
                          key={opt.value}
                          className={`${styles.optionBtn} ${answers.profile === opt.value ? styles.optionSelected : ""}`}
                          onClick={() => handleSelect("profile", opt.value)}
                        >
                          <span className={styles.optLabel}>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className={styles.stepBox}>
                    <h2 className={styles.stepQuestion}>What is your primary career goal right now?</h2>
                    <div className={styles.optionsGrid}>
                      {step2Options.map((opt) => (
                        <button
                          key={opt.value}
                          className={`${styles.optionBtn} ${answers.goal === opt.value ? styles.optionSelected : ""}`}
                          onClick={() => handleSelect("goal", opt.value)}
                        >
                          <span className={styles.optLabel}>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                    <button className={styles.backBtn} onClick={() => setStep(1)}>
                      ← Back to Step 1
                    </button>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className={styles.stepBox}>
                    <h2 className={styles.stepQuestion}>Which area or technology interests you most?</h2>
                    <div className={styles.optionsGrid}>
                      {step3Options.map((opt) => (
                        <button
                          key={opt.value}
                          className={`${styles.optionBtn} ${answers.interest === opt.value ? styles.optionSelected : ""}`}
                          onClick={() => handleSelect("interest", opt.value)}
                        >
                          <span className={styles.optLabel}>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                    <button className={styles.backBtn} onClick={() => setStep(2)}>
                      ← Back to Step 2
                    </button>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <div className={styles.stepBox}>
                    <h2 className={styles.stepQuestion}>How much time can you commit each week?</h2>
                    <div className={styles.optionsGrid}>
                      {step4Options.map((opt) => (
                        <button
                          key={opt.value}
                          className={`${styles.optionBtn} ${answers.timeCommitment === opt.value ? styles.optionSelected : ""}`}
                          onClick={() => setAnswers({ ...answers, timeCommitment: opt.value })}
                        >
                          <span className={styles.optLabel}>{opt.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Lead capture form to unlock result */}
                    <form onSubmit={handleSubmitLead} className={styles.leadForm}>
                      <h3 className={styles.leadFormTitle}>Where should we send your customized roadmap?</h3>
                      <div className={styles.formRow}>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          className="input"
                          value={answers.name}
                          onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                        />
                      </div>
                      <div className={styles.formRow2}>
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          className="input"
                          value={answers.email}
                          onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                        />
                        <input
                          type="tel"
                          required
                          placeholder="WhatsApp Phone"
                          className="input"
                          value={answers.phone}
                          onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg w-full mt-sm">
                        View Recommendation →
                      </button>
                    </form>

                    <button className={styles.backBtn} onClick={() => setStep(3)}>
                      ← Back
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* RESULTS DISPLAY */
              <div className={styles.resultsBox}>
                <div className={styles.resultBadge}>RECOMMENDED CAREER TRACK</div>
                <h2 className={styles.resultTitle}>{matchedInterest.path}</h2>
                <p className={styles.resultSub}>
                  Based on your goals and time commitment, here is your high-impact milestone roadmap:
                </p>

                {/* Milestone Progression */}
                <div className={styles.roadmapFlow}>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNum}>01</span>
                    <div>
                      <div className={styles.flowTitle}>Core Fundamentals</div>
                      <div className={styles.flowDesc}>Linux, Git & Core Logic</div>
                    </div>
                  </div>
                  <span className={styles.flowArrow}>→</span>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNum}>02</span>
                    <div>
                      <div className={styles.flowTitle}>Domain Deep Dive</div>
                      <div className={styles.flowDesc}>Live Interactive Cohort Labs</div>
                    </div>
                  </div>
                  <span className={styles.flowArrow}>→</span>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNum}>03</span>
                    <div>
                      <div className={styles.flowTitle}>Portfolio Capstones</div>
                      <div className={styles.flowDesc}>3 Production GitHub Projects</div>
                    </div>
                  </div>
                  <span className={styles.flowArrow}>→</span>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNum}>04</span>
                    <div>
                      <div className={styles.flowTitle}>Career Placement</div>
                      <div className={styles.flowDesc}>1-on-1 Mocks & Referrals</div>
                    </div>
                  </div>
                </div>

                {/* Certificate notice */}
                <div className={styles.resultCertNotice}>
                  <span className={styles.resultCertIcon}>🎓</span>
                  <span><strong>Course Completion Certificate Included:</strong> Accredited certificate + 100% Placement Assistance with resume optimization &amp; hiring referrals across India &amp; USA.</span>
                </div>

                <div className={styles.resultCtaGroup}>
                  <Link
                    to={`/courses/${matchedInterest.courseSlug}`}
                    className="btn btn-primary btn-lg"
                  >
                    View Syllabus →
                  </Link>
                  <button
                    onClick={handleWhatsAppRecommendation}
                    className="btn btn-teal btn-lg"
                  >
                    WhatsApp Mentor
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
