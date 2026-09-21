import React from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/utils/useSEO";
import { CONTACT_CONFIG } from "@/utils/constants";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy | SkilltoSettle",
    description: "Learn how SkilltoSettle collects, safeguards, and processes student and visitor information in compliance with global data protection standards.",
    canonical: "https://skilltosettle.com/privacy",
  });

  return (
    <div style={{ paddingTop: "32px", paddingBottom: "70px", minHeight: "100vh", background: "var(--bg-main, #f8fafc)" }}>
      <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.85rem", color: "var(--text-secondary, #64748b)", marginBottom: "16px" }}>
          <Link to="/" style={{ color: "var(--color-primary, #0284c7)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Privacy Policy</span>
        </nav>

        {/* Header */}
        <div style={{ background: "var(--bg-card, #ffffff)", padding: "36px", borderRadius: "16px", border: "1px solid var(--border-color, #e2e8f0)", boxShadow: "0 4px 20px rgba(0,0,0,0.03)", marginBottom: "28px" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "4px 12px", borderRadius: "999px" }}>
            LEGAL &amp; COMPLIANCE
          </span>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "var(--text-primary, #0f172a)", marginTop: "14px", marginBottom: "8px" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--text-secondary, #64748b)", fontSize: "0.95rem" }}>
            Last Updated: September 2026 • SkilltoSettle (SkilltoSettle.com)
          </p>

          <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid var(--border-color, #e2e8f0)" }} />

          <div style={{ lineHeight: 1.8, color: "var(--text-primary, #1e293b)", fontSize: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "24px", marginBottom: "12px", color: "#0f172a" }}>
              1. Introduction &amp; Commitment
            </h2>
            <p>
              Welcome to <strong>SkilltoSettle</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operating via <strong>SkilltoSettle.com</strong>. We are committed to safeguarding the privacy and personal data of our learners, alumni, prospective students, and website visitors across India, the United States, and worldwide.
            </p>
            <p>
              This Privacy Policy explains what personal data we collect, how we process and protect it, and your rights regarding your personal information when using our services, enrolling in cohorts, or interacting with our learning portals.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              2. Information We Collect
            </h2>
            <p>We may collect information in the following ways:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li><strong>Personal Identifiers:</strong> Name, email address, contact phone number, WhatsApp number, and billing address.</li>
              <li><strong>Academic &amp; Career Background:</strong> Educational qualification, work experience, career goals, and resume submissions (for 100% placement assistance services).</li>
              <li><strong>Account Credentials:</strong> Username and encrypted password credentials for accessing student learning resources.</li>
              <li><strong>Technical &amp; Usage Information:</strong> IP address, device type, browser specifications, pages visited, and interaction data collected through cookies and analytical tools.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              3. Payment Security &amp; Financial Information
            </h2>
            <p>
              All online tuition and enrollment fees paid on SkilltoSettle are processed securely through certified, PCI-DSS compliant payment gateways, including <strong>Razorpay</strong> and authorized banking partners.
            </p>
            <div style={{ background: "#f8fafc", borderLeft: "4px solid #0284c7", padding: "14px 18px", borderRadius: "0 8px 8px 0", margin: "16px 0" }}>
              <strong>Zero Card Storage Policy:</strong> SkilltoSettle does NOT store, capture, or have access to your full credit card numbers, debit card PINs, CVV codes, or net banking passwords. All financial transactions occur within the encrypted security sandbox of the payment processor.
            </div>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              4. How We Use Your Information
            </h2>
            <p>We utilize the collected information strictly for lawful educational and service purposes, including:</p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li>Delivering live interactive mentor sessions, project capstones, and course materials.</li>
              <li>Issuing verified and accredited Course Completion Certificates upon curriculum completion.</li>
              <li>Providing dedicated 100% Placement Assistance, mock interviews, and resume forwarding to hiring partner networks in India &amp; the USA.</li>
              <li>Sending important cohort reminders, timetable updates, receipts, and invoices via Email and WhatsApp.</li>
              <li>Enhancing our website performance, user experience, and course quality.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              5. Data Protection &amp; Sharing Restrictions
            </h2>
            <p>
              <strong>We do NOT sell, rent, or trade your personal information to third-party advertisers.</strong> We share your information only under the following strictly defined conditions:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "16px" }}>
              <li><strong>Hiring Partners (Placement Assistance):</strong> With your explicit consent, your resume and profile are shared with our verified recruitment network for hiring opportunities.</li>
              <li><strong>Service Providers:</strong> Cloud infrastructure (AWS/Google Cloud), notification delivery (email/SMS/WhatsApp service providers), and payment processors necessary to operate our services.</li>
              <li><strong>Legal Compliance:</strong> When required by court order, statutory regulation, or law enforcement authorities.</li>
            </ul>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              6. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              We use functional cookies to maintain your login session, remember currency choices (INR/USD), and analyze aggregated website traffic patterns to optimize performance. You may disable cookies in your browser settings, though certain learning portal features may function with reduced convenience.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              7. Data Retention &amp; Your Rights
            </h2>
            <p>
              We retain your account and academic record for as long as necessary to provide verifiable certificates and placement support. You have the right to request access to, correction of, or deletion of your personal data at any time by contacting our privacy desk.
            </p>

            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginTop: "28px", marginBottom: "12px", color: "#0f172a" }}>
              8. Contact Our Privacy &amp; Admissions Desk
            </h2>
            <p>For any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:</p>
            <div style={{ background: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: "12px", padding: "18px 24px", marginTop: "12px" }}>
              <p style={{ margin: "4px 0" }}><strong>Company:</strong> SkilltoSettle</p>
              <p style={{ margin: "4px 0" }}><strong>Official Email:</strong> <a href={`mailto:${CONTACT_CONFIG.infoEmail}`} style={{ color: "#0284c7" }}>{CONTACT_CONFIG.infoEmail}</a></p>
              <p style={{ margin: "4px 0" }}><strong>India Admissions Desk:</strong> <a href="tel:+917842832727" style={{ color: "#0284c7" }}>+91 7842832727</a></p>
              <p style={{ margin: "4px 0" }}><strong>USA Global Desk:</strong> <a href={`tel:${CONTACT_CONFIG.phoneTel}`} style={{ color: "#0284c7" }}>{CONTACT_CONFIG.whatsappDisplay}</a></p>
              <p style={{ margin: "4px 0" }}><strong>USA Office:</strong> {CONTACT_CONFIG.usaHQ}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
