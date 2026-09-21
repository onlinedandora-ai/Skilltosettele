import React, { useState } from "react";
import { getWhatsAppUrl } from "@/utils/constants";
import { useSEO } from "@/utils/useSEO";

export default function Corporate() {
  useSEO({
    title: "Corporate Upskilling & Enterprise Training | SkilltoSettle",
    description: "Custom enterprise tech upskilling in DevOps, Cloud, AI, and Data Engineering for teams across India & USA. Boost engineering velocity with hands-on capstones.",
    canonical: "https://skilltosettle.com/corporate",
  });

  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamSize, setTeamSize] = useState("10-25");
  const [trainingNeed, setTrainingNeed] = useState("Cloud & DevOps");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "60px", minHeight: "100vh" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "820px", margin: "0 auto 36px", textAlign: "center" }}>
          <div className="section-eyebrow teal">
            <span>🎯 100% PROJECT ASSISTANCE • INDIA &amp; USA ENTERPRISES</span>
          </div>
          <h1 className="text-h1 mb-sm">Custom Corporate Technology Training (India &amp; USA)</h1>
          <p className="text-body-lg text-secondary">
            Accelerate your organization&apos;s digital transformation with tailor-made corporate cohorts across <strong>India and the USA</strong>, backed by <strong>100% hands-on project assistance</strong> in Cloud, DevOps, Power Platform, and Data Engineering.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 14px", borderRadius: "999px" }}>
              🎯 100% PROJECT ASSISTANCE
            </span>
            <span style={{ fontSize: "clamp(0.7rem, 2.8vw, 0.8rem)", fontWeight: 700, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "5px 14px", borderRadius: "999px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
              🎓 COURSE COMPLETION CERTIFICATE INCLUDED
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "5px 14px", borderRadius: "999px" }}>
              🏢 ENTERPRISE CUSTOM SYLLABI
            </span>
          </div>
        </div>

        {/* Visual Enterprise Banner */}
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            height: "220px",
            marginBottom: "36px",
            border: "1.5px solid var(--border-color)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80"
            alt="Corporate Tech Training Workshop"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.8) 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "24px",
              color: "#ffffff",
            }}
          >
            <span style={{ fontSize: "0.78rem", fontWeight: 800, background: "#009bb9", padding: "4px 12px", borderRadius: "999px", width: "fit-content", marginBottom: "6px" }}>
              🏢 Enterprise Cohorts & Hands-on Labs
            </span>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>
              Empower your engineering and analytics teams with real practitioner mentorship
            </h2>
          </div>
        </div>

        {/* 2-Column Grid with Form */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "28px", alignItems: "start" }}>
          <div>
            <div className="card mb-lg" style={{ padding: "28px", background: "var(--bg-card)" }}>
              <h2 className="text-h3 mb-md">Why Enterprises Trust SkilltoSettle</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ background: "var(--color-teal-light)", color: "var(--color-teal)", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>Customized Tech Stack Alignment</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>We design syllabi around your exact production toolsets, CI/CD pipelines, and internal cloud policies.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ background: "var(--color-teal-light)", color: "var(--color-teal)", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>Real Cloud Sandbox Labs</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>Employees write code and deploy architecture in dedicated sandbox environments with mentor assistance.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ background: "var(--color-teal-light)", color: "var(--color-teal)", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", flexShrink: 0 }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>Measurable Assessment Reports</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>Receive detailed pre-and-post employee proficiency metrics, project evaluations, and attendance tracking.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: "28px", background: "var(--bg-muted)", border: "1.5px solid var(--border-color)", color: "var(--text-primary)" }}>
              <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 800 }}>Domain Training Offerings:</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="badge badge-accent">DevOps & Kubernetes</span>
                <span className="badge badge-teal">AWS / Azure Migration</span>
                <span className="badge badge-amber">Power BI & DAX</span>
                <span className="badge badge-coral">Data Engineering & Analytics</span>
                <span className="badge badge-outline">Business Analysis & Agile</span>
                <span className="badge badge-outline">Corporate Communication & English</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "32px 24px", background: "var(--bg-card)", boxShadow: "var(--shadow-lg)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <h3 className="text-h3 mb-sm">Inquiry Received</h3>
                <p className="text-body text-secondary mb-md">
                  Thank you, <strong>{contactName}</strong>. Our enterprise training director will reach out to you within 24 business hours to discuss customized outlines and commercial quotes for <strong>{companyName}</strong>.
                </p>
                <a
                  href={getWhatsAppUrl(`Hi, I submitted a corporate training request for ${companyName}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal w-full"
                >
                  Connect on WhatsApp for Immediate Discussion →
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-h3 mb-xs">Request Corporate Proposal</h2>
                <p className="text-body text-secondary mb-md" style={{ fontSize: "0.88rem" }}>
                  Get custom batch schedules and enterprise pricing.
                </p>

                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="compName">Company / Organization Name</label>
                  <input
                    id="compName"
                    type="text"
                    required
                    placeholder="e.g. Acme Technologies"
                    className="input"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="contactPerson">Lead Contact Person</label>
                  <input
                    id="contactPerson"
                    type="text"
                    required
                    placeholder="Your Name & Designation"
                    className="input"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
                  <div className="formGroup mb-sm">
                    <label className="label" htmlFor="workEmail">Work Email Address</label>
                    <input
                      id="workEmail"
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="formGroup mb-sm">
                    <label className="label" htmlFor="workPhone">Direct Phone / WhatsApp</label>
                    <input
                      id="workPhone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px" }}>
                  <div className="formGroup mb-md">
                    <label className="label" htmlFor="empSize">Team Size to Train</label>
                    <select
                      id="empSize"
                      className="input"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="5-10">5 – 10 Employees</option>
                      <option value="10-25">10 – 25 Employees</option>
                      <option value="25-50">25 – 50 Employees</option>
                      <option value="50+">50+ Enterprise Scale</option>
                    </select>
                  </div>
                  <div className="formGroup mb-md">
                    <label className="label" htmlFor="trainingNeedSelect">Primary Technology</label>
                    <select
                      id="trainingNeedSelect"
                      className="input"
                      value={trainingNeed}
                      onChange={(e) => setTrainingNeed(e.target.value)}
                    >
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="Data Analytics & SQL">Data Analytics & SQL</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Power Platform & BI">Power Platform & BI</option>
                      <option value="Full Stack Development">Full Stack Development</option>
                      <option value="Business Analysis">Business Analysis</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Request Custom Proposal →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
