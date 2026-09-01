import React, { useState } from "react";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Skillsettle suitable for absolute beginners or non-tech backgrounds?",
      a: "Yes, absolutely. Our foundational modules are specifically structured to build technical fluency from the ground up (e.g., Linux basics, SQL fundamentals, and core logic) before diving into advanced cloud architectures and ML algorithms.",
    },
    {
      q: "Are the classes live or pre-recorded?",
      a: "All our master cohorts are 100% live and instructor-led. You get real-time interaction, live Q&A, and interactive coding sessions. In addition, you get lifetime access to HD class recordings within 2 hours of every session.",
    },
    {
      q: "What happens if I miss a live class?",
      a: "No worries! Every single session is recorded and uploaded to your student portal with complete timestamps, code notes, and lab assets. You can also book dedicated doubt-clearing slots with mentors or join a parallel batch.",
    },
    {
      q: "How do the real-world projects work?",
      a: "Instead of following a video blindly, you are given realistic business scenario briefs (e.g., deploying an automated multi-stage CI/CD pipeline or architecting an enterprise Power BI data model). Mentors review your GitHub repos and provide 1-on-1 code reviews.",
    },
    {
      q: "How does career guidance and interview preparation work?",
      a: "Once you complete your core coursework and projects, our career team steps in for: (1) ATS-friendly resume rewrite, (2) LinkedIn profile enhancement, (3) 1-on-1 live mock interviews with domain leads, and (4) Interview referral support across our hiring network.",
    },
    {
      q: "Do I receive an accredited certificate?",
      a: "Yes. Upon completing the required capstone projects and assessments, you will be awarded an industry-recognized Certificate of Completion with a unique verification link shareable directly on LinkedIn.",
    },
    {
      q: "What payment options and installment plans are available?",
      a: "We support all major Indian and international payment methods via secure Razorpay checkout: UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and no-cost EMI installment options across leading banks.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span>❓</span> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-h2">Got Questions? We Have Answers.</h2>
          <p className="text-body-lg">
            Everything you need to know about our cohorts, projects, mentorship, and career transformation process.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}>
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.q}</span>
                  <span className={styles.toggleIcon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className={styles.answerBox}>
                    <p className={styles.answerText}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.advisorBox}>
          <span>Have a question not answered here?</span>
          <a
            href="https://wa.me/919999999999?text=Hi,%20I%20have%20a%20question%20about%20Skillsettle%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            💬 Ask on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
