import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/utils/useSEO";
import { CONTACT_CONFIG } from "@/utils/constants";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service | SkilltoSettle",
    description: "Read the terms and conditions governing enrollment, live mentor cohort participation, certifications, and placement assistance at SkilltoSettle.",
    canonical: "https://skilltosettle.com/terms",
  });

  return (
    <div style={{ paddingTop: "32px", paddingBottom: "70px", minHeight: "100vh", background: "var(--bg-main, #f8fafc)" }}>
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.85rem", color: "var(--text-secondary, #64748b)", marginBottom: "16px" }}>
          <Link to="/" style={{ color: "var(--color-primary, #0284c7)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Terms of Service</span>
        </nav>

        {/* Header */}
        <div style={{ background: "var(--bg-card, #ffffff)", padding: "36px", borderRadius: "16px", border: "1px solid var(--border-color, #e2e8f0)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)", marginBottom: "28px" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "4px 12px", borderRadius: "999px" }}>
            USER AGREEMENT
          </span>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text-primary, #0f172a)", marginTop: "14px", marginBottom: "8px" }}>
            Terms of Service
          </h1>
          <p style={{ color: "var(--text-secondary, #64748b)", fontSize: "0.95rem" }}>
            Last Updated: September 2026 • SkilltoSettle (SkilltoSettle.com)
          </p>

          <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid var(--border-color, #e2e8f0)" }} />

          <div style={{ lineHeight: 1.8, color: "var(--text-primary, #1e293b)", fontSize: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "24px", marginBottom: "12px", color: "#0f172a" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, registering an account, or enrolling in any live training cohort on <strong>SkilltoSettle</strong> (&ldquo;SkilltoSettle.com&rdquo;), you agree to be bound by these Terms of Service, our Privacy Policy, and our Refund Policy. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              2. Educational Services &amp; Cohort Participation
            </h2>
            <p>
              SkilltoSettle provides professional live mentor-led upskilling programs, practical assignments, capstone architecture projects, and career counseling.
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li><strong>Attendance &amp; Recordings:</strong> Students are encouraged to attend live interactive sessions. Session recordings, code repositories, and notes are made accessible for personal learning review.</li>
              <li><strong>Certification Criteria:</strong> Course Completion Certificates are awarded to learners who complete designated curriculum milestones, project reviews, and capstone assessments.</li>
              <li><strong>Platform Conduct:</strong> Learners must maintain professional decorum during live sessions, Q&amp;A channels, and mentor interactions. Any disruptive or abusive behavior may result in immediate suspension without refund.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              3. Enrollment, Pricing &amp; Payments
            </h2>
            <p>
              All course tuition fees are displayed on the respective course pages in INR (₹) for Indian learners or USD ($) for international learners.
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li>Seats in live batches are limited and confirmed upon successful receipt of payment via authorized payment gateways (e.g., Razorpay, Credit/Debit Cards, UPI, Net Banking).</li>
              <li>SkilltoSettle reserves the right to adjust tuition pricing or promotional discounts prior to registration confirmation.</li>
              <li>All payments are subject to our transparent <Link to="/refund" style={{ color: "#0284c7" }}>Refund and Cancellation Policy</Link>.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              4. 100% Placement Assistance Terms
            </h2>
            <p>
              SkilltoSettle provides dedicated <strong>100% Placement Assistance</strong> for eligible learners who complete their chosen program. This assistance includes:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li>Professional resume and LinkedIn profile optimization aligned with India and US tech standards.</li>
              <li>1-on-1 technical mock interviews, behavioral prep, and salary negotiation mentoring.</li>
              <li>Forwarding student profiles and scheduling interview drives with our verified network of hiring partners.</li>
              <li><em>Student Obligation:</em> Learners must complete capstones, maintain active attendance, and actively attend scheduled interview calls to maximize placement outcomes. Placement assistance represents our comprehensive career support commitment.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              5. Intellectual Property Rights
            </h2>
            <p>
              All curriculum modules, code demonstrations, recorded lectures, branding logos, and documentation provided by SkilltoSettle are the exclusive intellectual property of SkilltoSettle. You are granted a limited, personal, non-transferable license to access the materials for your individual study. You may not reproduce, redistribute, resell, or publicly broadcast any course materials without prior written authorization.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              6. Limitation of Liability
            </h2>
            <p>
              SkilltoSettle strives to provide top-tier industry instruction and reliable platform uptime. In no event shall SkilltoSettle, its mentors, or directors be liable for indirect, incidental, or consequential damages resulting from platform downtime, technical failures outside our control, or individual hiring decisions made by third-party recruitment partners.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              7. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India and the state jurisdiction of Texas, USA, where applicable. Any disputes arising under these terms shall be settled through amicable good-faith mediation prior to formal legal recourse.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              8. Contacting Us
            </h2>
            <p>If you have any questions regarding these Terms of Service, please contact our administrative team:</p>
            <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: "12px", padding: "18px 24px", marginTop: "12px" }}>
              <p style={{ margin: "4px 0" }}><strong>SkilltoSettle Support Desk</strong></p>
              <p style={{ margin: "4px 0" }}><strong>Email:</strong> <a href={`mailto:${CONTACT_CONFIG.supportEmail}`} style={{ color: "#0284c7" }}>{CONTACT_CONFIG.supportEmail}</a></p>
              <p style={{ margin: "4px 0" }}><strong>India Desk:</strong> <a href="tel:+917842832727" style={{ color: "#0284c7" }}>+91 7842832727</a></p>
              <p style={{ margin: "4px 0" }}><strong>USA Desk:</strong> <a href={`tel:${CONTACT_CONFIG.phoneTel}`} style={{ color: "#0284c7" }}>{CONTACT_CONFIG.whatsappDisplay}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
