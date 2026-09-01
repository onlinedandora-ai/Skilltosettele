import React, { useState } from "react";

export default function Contact() {
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
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div className="container">
        <div style={{ maxWidth: "780px", margin: "0 auto 48px", textAlign: "center" }}>
          <div className="section-eyebrow teal">
            <span>📞</span> REACH OUR COUNSELING DESK
          </div>
          <h1 className="text-h1 mb-sm">Talk to a Career Advisor</h1>
          <p className="text-body-lg text-secondary">
            Have questions about syllabus depth, batch timings, prerequisites, or financing options? We are here to help you make the right career move.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "40px", maxWidth: "960px", margin: "0 auto" }}>
          {/* Direct channels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="card" style={{ padding: "28px", background: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                <span style={{ fontSize: "2rem" }}>💬</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>WhatsApp Career Desk</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Fastest reply (typically within 5 minutes)</p>
                </div>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hi,%20I%20have%20questions%20about%20Skillsettle%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-teal btn-sm w-full"
              >
                Chat on WhatsApp Now →
              </a>
            </div>

            <div className="card" style={{ padding: "28px", background: "#ffffff" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                <span style={{ fontSize: "2rem" }}>✉️</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Email Support</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>For detailed syllabus & corporate queries</p>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--color-accent)", fontWeight: 600 }}>
                support@skillsettle.com
              </p>
            </div>

            <div className="card" style={{ padding: "28px", background: "var(--bg-muted)", border: "1.5px solid var(--border-color)", color: "var(--text-primary)" }}>
              <h4 style={{ color: "var(--color-accent)", fontSize: "0.95rem", marginBottom: "8px", fontWeight: 700 }}>
                ⏰ Counseling Desk Hours:
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Monday to Saturday: 9:00 AM – 9:00 PM IST<br />
                Sunday: 10:00 AM – 6:00 PM IST
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="card" style={{ padding: "36px", background: "#ffffff", boxShadow: "var(--shadow-lg)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🎉</div>
                <h3 className="text-h3 mb-sm">Message Sent!</h3>
                <p className="text-body text-secondary mb-md">
                  Thank you, <strong>{name}</strong>. A dedicated counselor will contact you via WhatsApp or Email within 2 business hours.
                </p>
                <a
                  href="https://wa.me/919999999999?text=Hi,%20I%20just%20submitted%20a%20contact%20form%20on%20the%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal w-full"
                >
                  💬 Connect on WhatsApp for Instant Answer →
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
                  <label className="label" htmlFor="visitorPhone">WhatsApp Number</label>
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
                  <label className="label" htmlFor="visitorMsg">Your Question / Career Goal</label>
                  <textarea
                    id="visitorMsg"
                    rows={4}
                    required
                    placeholder="Tell us what course you are interested in or where you want your career to go..."
                    className="input"
                    style={{ resize: "vertical" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  Submit Question →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
