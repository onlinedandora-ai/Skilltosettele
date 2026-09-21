import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/utils/useSEO";
import { CONTACT_CONFIG } from "@/utils/constants";

export default function RefundPolicy() {
  useSEO({
    title: "Refund & Cancellation Policy | SkilltoSettle",
    description: "Learn about SkilltoSettle's transparent course refund, batch rescheduling, and cancellation terms designed for student confidence and fairness.",
    canonical: "https://skilltosettle.com/refund",
  });

  return (
    <div style={{ paddingTop: "32px", paddingBottom: "70px", minHeight: "100vh", background: "var(--bg-main, #f8fafc)" }}>
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.85rem", color: "var(--text-secondary, #64748b)", marginBottom: "16px" }}>
          <Link to="/" style={{ color: "var(--color-primary, #0284c7)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Refund &amp; Cancellation Policy</span>
        </nav>

        {/* Header */}
        <div style={{ background: "var(--bg-card, #ffffff)", padding: "36px", borderRadius: "16px", border: "1px solid var(--border-color, #e2e8f0)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)", marginBottom: "28px" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "4px 12px", borderRadius: "999px" }}>
            TRANSPARENT GUARANTEE
          </span>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text-primary, #0f172a)", marginTop: "14px", marginBottom: "8px" }}>
            Refund &amp; Cancellation Policy
          </h1>
          <p style={{ color: "var(--text-secondary, #64748b)", fontSize: "0.95rem" }}>
            Last Updated: September 2026 • SkilltoSettle (SkilltoSettle.com)
          </p>

          <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid var(--border-color, #e2e8f0)" }} />

          <div style={{ lineHeight: 1.8, color: "var(--text-primary, #1e293b)", fontSize: "1rem" }}>
            <p>
              At <strong>SkilltoSettle</strong>, we believe in complete transparency, learner satisfaction, and delivering world-class live mentor training. We understand that personal schedules, job commitments, or emergencies may occasionally require adjustments. Below is our comprehensive refund and cancellation framework.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "24px", marginBottom: "12px", color: "#0f172a" }}>
              1. 7-Day Money-Back Guarantee (Before / First Week of Cohort)
            </h2>
            <div style={{ background: "#f0fdf4", border: "1.5px solid #86efac", padding: "18px 22px", borderRadius: "12px", margin: "16px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.3rem" }}>🛡️</span>
                <strong style={{ fontSize: "1.1rem", color: "#166534" }}>No-Risk Guarantee</strong>
              </div>
              <p style={{ margin: 0, color: "#14532d" }}>
                If you enroll in any live cohort program and decide within <strong>7 calendar days of your payment</strong> (or prior to the second live class of the batch, whichever comes first) that the program does not meet your learning expectations, you are eligible for a <strong>100% full refund</strong> with no questions asked.
              </p>
            </div>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              2. 100% Free Batch Rescheduling &amp; Cohort Transfer
            </h2>
            <p>
              We know life happens! If work deadlines, exams, or personal emergencies make it difficult to attend your scheduled cohort:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li><strong>Zero Penalty Batch Shift:</strong> You may transfer your enrollment to the upcoming next batch of the same program at <strong>no additional fee</strong>.</li>
              <li><strong>Recording &amp; Mentor Access:</strong> You retain continuous access to all recorded live lectures, code repositories, and Slack/WhatsApp study channels during the transition.</li>
              <li>You may request a batch transfer simply by notifying your assigned student coordinator or emailing <a href={`mailto:${CONTACT_CONFIG.supportEmail}`} style={{ color: "#0284c7" }}>{CONTACT_CONFIG.supportEmail}</a> at least 24 hours before a batch begins.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              3. Cancellation After the Initial Guarantee Window
            </h2>
            <p>
              Because our live cohorts have strictly limited seat caps (to ensure personalized 1-on-1 mentor guidance and code reviews):
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li>Refund requests submitted after the 7-day guarantee window or after attending more than 2 live classes are generally not eligible for monetary refunds, as mentor seats and capstone allocations have already been committed.</li>
              <li>In exceptional emergency cases (medical or severe personal unforeseen circumstances), we will issue <strong>100% Store Credit</strong> towards any future SkilltoSettle course or allow transferring your seat to a family member or colleague.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              4. How to Request a Refund
            </h2>
            <p>To request a refund under the eligible period, follow these simple steps:</p>
            <ol style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li>Send an email to <strong>{CONTACT_CONFIG.supportEmail}</strong> with the subject line <em>&ldquo;Refund Request - [Your Full Name] - [Course Name]&rdquo;</em>.</li>
              <li>Provide your enrollment email address and transaction reference or Razorpay Payment ID.</li>
              <li>Our student success desk will verify your request and confirm approval within <strong>24 to 48 business hours</strong>.</li>
            </ol>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              5. Refund Disbursement Timeline
            </h2>
            <p>
              Once your refund is approved, the funds are credited directly back to your original source of payment (Credit Card, Debit Card, UPI, or Net Banking) via our payment gateway partner <strong>Razorpay</strong>.
            </p>
            <p>
              Depending on your issuing bank or card provider, standard processing takes between <strong>5 to 7 business days</strong> for the refunded credit to reflect on your statement.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              6. Questions &amp; Support Assistance
            </h2>
            <p>Our dedicated admissions and student operations team is here to support you:</p>
            <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: "12px", padding: "18px 24px", marginTop: "12px" }}>
              <p style={{ margin: "4px 0" }}><strong>Support &amp; Refunds Desk:</strong> <a href={`mailto:${CONTACT_CONFIG.supportEmail}`} style={{ color: "#0284c7" }}>{CONTACT_CONFIG.supportEmail}</a></p>
              <p style={{ margin: "4px 0" }}><strong>India Admissions Helpline:</strong> <a href="tel:+917842832727" style={{ color: "#0284c7" }}>+91 7842832727</a></p>
              <p style={{ margin: "4px 0" }}><strong>USA Global Desk:</strong> <a href={`tel:${CONTACT_CONFIG.phoneTel}`} style={{ color: "#0284c7" }}>{CONTACT_CONFIG.whatsappDisplay}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
