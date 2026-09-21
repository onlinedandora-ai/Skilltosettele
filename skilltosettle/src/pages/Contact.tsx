import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT_CONFIG, getWhatsAppUrl } from "@/utils/constants";
import { useSEO } from "@/utils/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact Admissions & Career Advisory",
    description: "Contact SkilltoSettle admissions and career advisory desk for batch timings, curriculum, and 100% placement assistance in India & USA.",
    canonical: "https://skilltosettle.com/contact",
  });
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "60px", minHeight: "100vh" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto 36px", textAlign: "center" }}>
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h1 className="text-h1 mb-sm">SkilltoSettle India &amp; USA Admissions Desk</h1>
          <p className="text-body-lg text-secondary">
            Have questions about <strong>100% Placement Assistance</strong>, syllabus depth, batch timings in IST or US time zones, prerequisites, or enrollment? Talk directly to our career advisors.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 14px", borderRadius: "999px" }}>
              🎯 100% PLACEMENT ASSISTANCE
            </span>
            <span style={{ fontSize: "clamp(0.7rem, 2.8vw, 0.8rem)", fontWeight: 700, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "5px 14px", borderRadius: "999px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
              🎓 COURSE COMPLETION CERTIFICATE INCLUDED
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "5px 14px", borderRadius: "999px" }}>
              💬 24/7 ADMISSIONS WHATSAPP DESK
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px", maxWidth: "960px", margin: "0 auto" }}>
          {/* Direct channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="card" style={{ padding: "24px", background: "var(--bg-card)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>🇺🇸 USA HQ &amp; WhatsApp Desk</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Houston, TX, USA (Direct response within minutes)</p>
                </div>
              </div>
              <a
                href={getWhatsAppUrl("Hi! I have questions about 100% placement assistance and admissions for India & USA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal btn-sm w-full"
                style={{ background: "#25D366", color: "#ffffff", border: "none", fontWeight: 700 }}
              >
                WhatsApp Desk →
              </a>
            </div>

            <div className="card" style={{ padding: "24px", background: "var(--bg-card)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>🇮🇳 India Admissions &amp; Placement Desk</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Hyderabad &amp; Bangalore (100% Placement Assistance)</p>
                </div>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: "8px" }}>
                Dedicated career counseling for Indian students and freshers across all 5 flagship tech cohorts.
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-accent)", fontWeight: 600 }}>
                {CONTACT_CONFIG.email}
              </p>
            </div>

            <div className="card" style={{ padding: "24px", background: "var(--bg-muted)", border: "1.5px solid var(--border-color)", color: "var(--text-primary)" }}>
              <h4 style={{ color: "var(--color-accent)", fontSize: "0.95rem", marginBottom: "8px", fontWeight: 700 }}>
                Admissions Desk Hours (India &amp; USA):
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <strong>India Desk (IST):</strong> Monday to Saturday: 9:00 AM – 9:00 PM IST<br />
                <strong>USA Desk (CST/EST):</strong> Monday to Saturday: 8:00 AM – 7:00 PM CST<br />
                WhatsApp / Direct: <strong>{CONTACT_CONFIG.phoneDisplay}</strong>
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="card" style={{ padding: "32px 24px", background: "var(--bg-card)", boxShadow: "var(--shadow-lg)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <h3 className="text-h3 mb-sm">Message Received!</h3>
                <p className="text-body text-secondary mb-md">
                  Thank you, <strong>{name}</strong>. A dedicated SkilltoSettle counselor will contact you via WhatsApp or Email within 2 business hours.
                </p>
                <a
                  href={getWhatsAppUrl(`Hi, I just submitted a contact form on the website. My name is ${name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal w-full"
                  style={{ background: "#25D366", color: "#ffffff", border: "none", fontWeight: 700 }}
                >
                  WhatsApp Desk →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-h3 mb-sm">Send a Message</h2>
                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="visitorName">Your Full Name</label>
                  <input
                    id="visitorName"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="visitorEmail">Email Address</label>
                  <input
                    id="visitorEmail"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="visitorPhone">WhatsApp Phone Number</label>
                  <input
                    id="visitorPhone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="formGroup mb-md">
                  <label className="label" htmlFor="visitorMsg">Your Question / Target Course</label>
                  <textarea
                    id="visitorMsg"
                    rows={4}
                    required
                    placeholder="e.g. DevOps with AI, SQL, Machine Learning, Business Analyst, or IELTS..."
                    className="input"
                    style={{ resize: "vertical" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Submit Question →
                </button>
                <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--text-secondary, #64748b)", marginTop: "12px" }}>
                  🔒 We respect your privacy. Your information is protected under our{" "}
                  <Link to="/privacy" style={{ color: "#0284c7", textDecoration: "underline" }}>Privacy Policy</Link> and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
