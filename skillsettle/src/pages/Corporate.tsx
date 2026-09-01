import React, { useState } from "react";

export default function Corporate() {
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
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "820px", margin: "0 auto 48px", textAlign: "center" }}>
          <div className="section-eyebrow teal">
            <span>🏢</span> ENTERPRISE UPSKILLING
          </div>
          <h1 className="text-h1 mb-sm">Custom Corporate Technology Training</h1>
          <p className="text-body-lg text-secondary">
            Accelerate your organization&apos;s digital transformation with tailor-made training programs in Cloud, DevOps, AI, Power Platform, and modern Data Engineering.
          </p>
        </div>

        {/* 2-Column Grid with Form */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div className="card mb-lg" style={{ padding: "32px", background: "#ffffff" }}>
              <h2 className="text-h3 mb-md">Why Enterprises Trust Skillsettle</h2>
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

            <div className="card" style={{ padding: "32px", background: "var(--bg-muted)", border: "1.5px solid var(--border-color)", color: "var(--text-primary)" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 800 }}>Domain Training Offerings:</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span className="badge badge-accent">DevOps & Kubernetes</span>
                <span className="badge badge-teal">AWS / Azure Migration</span>
                <span className="badge badge-amber">Power BI & DAX</span>
                <span className="badge badge-coral">Generative AI for Engineers</span>
                <span className="badge badge-outline">Business Analysis & Agile</span>
                <span className="badge badge-outline">Corporate English & Communication</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "36px", background: "#ffffff", boxShadow: "var(--shadow-lg)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎉</div>
                <h3 className="text-h3 mb-sm">Inquiry Received!</h3>
                <p className="text-body text-secondary mb-md">
                  Thank you, <strong>{contactName}</strong>. Our enterprise training director will reach out to you within 24 business hours to discuss customized outlines and commercial quotes for <strong>{companyName}</strong>.
                </p>
                <a
                  href={`https://wa.me/919999999999?text=Hi,%20I%20submitted%20a%20corporate%20training%20request%20for%20${encodeURIComponent(companyName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal w-full"
                >
                  💬 Connect on WhatsApp for Urgent Inquiries →
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
                    placeholder="e.g. Infosys, TCS, Tech Startup"
                    className="input"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="cntName">Contact Person Name</label>
                  <input
                    id="cntName"
                    type="text"
                    required
                    placeholder="e.g. Anand Verma (HR / Tech Lead)"
                    className="input"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                </div>

                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="workEmail">Work Email Address</label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    placeholder="anand@company.com"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="formGroup mb-sm">
                  <label className="label" htmlFor="phoneNum">Phone / WhatsApp Number</label>
                  <input
                    id="phoneNum"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                  <div>
                    <label className="label" htmlFor="teamSizeSelect">Team Size</label>
                    <select
                      id="teamSizeSelect"
                      className="input"
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                    >
                      <option value="5-10">5–10 Employees</option>
                      <option value="10-25">10–25 Employees</option>
                      <option value="25-50">25–50 Employees</option>
                      <option value="50+">50+ Employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="label" htmlFor="trainingNeedSelect">Primary Technology</label>
                    <select
                      id="trainingNeedSelect"
                      className="input"
                      value={trainingNeed}
                      onChange={(e) => setTrainingNeed(e.target.value)}
                    >
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Data Analytics & SQL">Data Analytics & SQL</option>
                      <option value="Power BI / Power Apps">Power BI / Power Apps</option>
                      <option value="Business Analysis">Business Analysis</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Request Custom Proposal & Outline →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
