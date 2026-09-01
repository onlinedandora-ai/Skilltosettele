import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CareerFinder.module.css";

export default function CareerFinder() {
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
    { label: "College Student / Final Year", icon: "🎓", value: "student" },
    { label: "Recent Graduate (Looking for Job)", icon: "🚀", value: "graduate" },
    { label: "Working in Non-Tech / Operations", icon: "💼", value: "non-tech" },
    { label: "Software / IT Engineer (Upskilling)", icon: "💻", value: "tech" },
    { label: "Business / HR / Management", icon: "📊", value: "management" },
  ];

  const step2Options = [
    { label: "Land My First Tech Job", icon: "🎯", value: "first-job" },
    { label: "Switch Careers Into Tech", icon: "🔄", value: "switch" },
    { label: "Get Promoted & Upgrade Salary", icon: "📈", value: "grow" },
    { label: "Prepare for Overseas / Global Career", icon: "🌍", value: "global" },
  ];

  const step3Options = [
    { label: "Cloud, DevOps & Kubernetes", icon: "☁️", value: "cloud-devops", path: "DevOps & Cloud Engineer", courseSlug: "devops-with-ai" },
    { label: "AI, Data Analytics & SQL", icon: "🧠", value: "ai-data", path: "Data Analyst & BI Specialist", courseSlug: "data-analytics-sql" },
    { label: "Machine Learning & AI Engineering", icon: "🤖", value: "ml-ai", path: "Machine Learning Engineer", courseSlug: "machine-learning-ai" },
    { label: "Business Analysis & Agile Management", icon: "📋", value: "business", path: "Business Analyst & PMO", courseSlug: "business-analyst" },
    { label: "Microsoft Power Platform & BI", icon: "⚡", value: "microsoft", path: "Microsoft BI Developer", courseSlug: "power-bi" },
    { label: "IELTS & International English Mastery", icon: "🗣️", value: "global", path: "Global Career & IELTS 7+ Band", courseSlug: "ielts-preparation" },
  ];

  const step4Options = [
    { label: "3 – 5 Hours / Week (Weekend Batch)", icon: "☕", value: "light" },
    { label: "5 – 10 Hours / Week (Standard Pace)", icon: "⏱️", value: "standard" },
    { label: "10+ Hours / Week (Fast-Track Boot Camp)", icon: "⚡", value: "fast" },
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
    const text = `Hi! I completed the Career Quiz on Skillsettle.\nName: ${answers.name}\nGoal: ${answers.goal}\nRecommended Path: ${matchedInterest.path}\nI want to discuss batch dates & enrollment details.`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Header */}
          <div className={styles.quizHeader}>
            <div className="section-eyebrow teal">
              <span>🎯</span> 2-MINUTE CAREER ASSESSMENT
            </div>
            <h1 className={styles.title}>Find Your Ideal Career Path</h1>
            <p className={styles.sub}>
              Answer 4 quick questions to receive a tailored technology roadmap based on current 2026 hiring demands.
            </p>

            {/* Progress Bar */}
            {!completed && (
              <div className={styles.progressContainer}>
                <div className={styles.progressSteps}>
                  <span>Step {step} of 4</span>
                  <span>{step === 4 ? "Almost Done!" : `${Math.round((step / 4) * 100)}% Completed`}</span>
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
                          <span className={styles.optIcon}>{opt.icon}</span>
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
                          <span className={styles.optIcon}>{opt.icon}</span>
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
                          <span className={styles.optIcon}>{opt.icon}</span>
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
                          <span className={styles.optIcon}>{opt.icon}</span>
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
                        View My Personalized Career Recommendation →
                      </button>
                    </form>

                    <button className={styles.backBtn} onClick={() => setStep(3)}>
                      ← Back to Step 3
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* RESULTS DISPLAY */
              <div className={styles.resultsBox}>
                <div className={styles.resultBadge}>🎯 YOUR RECOMMENDED CAREER TRACK</div>
                <h2 className={styles.resultTitle}>{matchedInterest.path}</h2>
                <p className={styles.resultSub}>
                  Based on your ambition to <strong>{answers.goal}</strong>, here is your high-impact milestone roadmap:
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
                  <span className={styles.flowArrow}>↓</span>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNum}>02</span>
                    <div>
                      <div className={styles.flowTitle}>Domain Deep Dive</div>
                      <div className={styles.flowDesc}>Live Interactive Cohort Labs</div>
                    </div>
                  </div>
                  <span className={styles.flowArrow}>↓</span>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNum}>03</span>
                    <div>
                      <div className={styles.flowTitle}>Capstone Projects</div>
                      <div className={styles.flowDesc}>3 Production Portfolio Builds</div>
                    </div>
                  </div>
                  <span className={styles.flowArrow}>↓</span>
                  <div className={styles.flowItem}>
                    <span className={styles.flowNum}>04</span>
                    <div>
                      <div className={styles.flowTitle}>Placement Launch</div>
                      <div className={styles.flowDesc}>Resume, Mock Interviews & Referrals</div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className={styles.resultActions}>
                  <Link
                    to={`/courses/${matchedInterest.courseSlug}`}
                    className="btn btn-primary btn-lg"
                  >
                    Explore {matchedInterest.path} Syllabus →
                  </Link>
                  <button
                    onClick={handleWhatsAppRecommendation}
                    className="btn btn-teal btn-lg"
                  >
                    💬 Discuss Roadmap on WhatsApp
                  </button>
                </div>

                <div className={styles.restartBox}>
                  <button
                    onClick={() => {
                      setCompleted(false);
                      setStep(1);
                    }}
                    className={styles.restartBtn}
                  >
                    ↻ Retake Quiz
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
