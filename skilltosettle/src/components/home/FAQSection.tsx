import React, { useState } from "react";
import { getWhatsAppUrl } from "@/utils/constants";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is SkilltoSettle suitable for absolute beginners or non-tech backgrounds?",
      a: "Yes, absolutely. Our foundational modules are specifically structured to build technical fluency from the ground up (e.g., Linux basics, SQL fundamentals, and programming logic) before moving into advanced cloud architectures and data pipelines.",
    },
    {
      q: "Are the classes live or pre-recorded?",
      a: "All our master cohorts are 100% live and instructor-led. You get real-time interaction, live Q&A, and interactive coding sessions. In addition, you get lifetime access to class recordings within 2 hours of every session.",
    },
    {
      q: "What happens if I miss a live class?",
      a: "Every session is recorded and uploaded to your student portal with complete timestamps, code notes, and lab assets. You can also book dedicated doubt-clearing sessions with mentors or attend a parallel batch.",
    },
    {
      q: "How do the real-world projects work?",
      a: "Instead of copying boilerplate code, you are given realistic business scenario briefs (e.g., deploying an automated multi-stage CI/CD pipeline or architecting an enterprise Power BI data model). Mentors review your GitHub repositories and provide 1-on-1 code reviews.",
    },
    {
      q: "How does career guidance and interview preparation work?",
      a: "Once you complete your core coursework and projects, our career team assists with: (1) ATS-friendly resume review, (2) LinkedIn profile enhancement, (3) 1-on-1 live mock interviews with domain leads, and (4) Interview referral opportunities.",
    },
    {
      q: "Do I receive a certificate of completion?",
      a: "Yes. Upon completing the required capstone projects and assessments, you will be awarded an industry-recognized Certificate of Completion with a unique verification ID shareable directly on LinkedIn and your resume.",
    },
    {
      q: "What payment options and installment plans are available?",
      a: "We support secure payments via UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and no-cost EMI installment options across major banks.",
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
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-h2">Got Questions? We Have Answers.</h2>
          <p className="text-body-lg">
            Everything you need to know about our cohorts, projects, mentorship, and career transition support.
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
            href={getWhatsAppUrl("Hi, I have a question about SkilltoSettle courses and curriculum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Ask on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
