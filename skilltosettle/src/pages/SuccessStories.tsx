import React from "react";
import { Link } from "react-router-dom";
import { testimonials } from "@/data/testimonials";
import StarRating from "@/components/ui/StarRating";
import { useSEO } from "@/utils/useSEO";

export default function SuccessStories() {
  useSEO({
    title: "Student Success Stories & Placements | SkilltoSettle",
    description: "Read how students across India & USA transitioned into high-paying DevOps, Data Science, AI, and Cyber Security careers with 100% placement assistance.",
    canonical: "https://skilltosettle.com/success-stories",
  });

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "60px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h1 className="text-h1 mb-sm">Alumni Placements in India &amp; USA</h1>
          <p className="text-body-lg">
            Read how learners across India and the USA landed high-growth Data, DevOps, AI, and Business Analyst careers with our <strong>100% placement assistance</strong> and personalized mentor support.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 14px", borderRadius: "999px" }}>
              🎯 100% PLACEMENT ASSISTANCE
            </span>
            <span style={{ fontSize: "clamp(0.7rem, 2.8vw, 0.8rem)", fontWeight: 700, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "5px 14px", borderRadius: "999px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
              🎓 COURSE COMPLETION CERTIFICATE INCLUDED
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "5px 14px", borderRadius: "999px" }}>
              ⭐ 4.9/5 ALUMNI RATING
            </span>
          </div>
        </div>

        <div className="grid-3 mb-2xl">
          {testimonials.map((t) => (
            <div key={t.id} className="card" style={{ padding: "28px", background: "var(--bg-card)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: "54px", height: "54px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-teal)", flexShrink: 0 }}
                  />
                ) : (
                  <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "linear-gradient(135deg, var(--color-accent), var(--color-teal))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{t.name}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{t.role} at <strong>{t.company}</strong></p>
                </div>
              </div>

              <div style={{ background: "var(--bg-muted)", padding: "12px 14px", borderRadius: "8px", marginBottom: "16px", border: "1px solid var(--border-color)" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                  <strong>PREVIOUS ROLE:</strong> {t.before}
                </div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#166534" }}>
                  <strong>TRANSITIONED TO:</strong> {t.after}
                </div>
              </div>

              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "20px", flex: 1, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid var(--border-light)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="tag" style={{ background: "var(--color-accent-light)", color: "var(--color-accent)", fontWeight: 700 }}>{t.course}</span>
                  <span style={{ fontSize: "0.74rem", color: "#009bb9", fontWeight: 700 }}>🎓 Course Completion Certificate Included</span>
                </div>
                <StarRating rating={t.rating} showText={false} />
              </div>
            </div>
          ))}
        </div>

        <div className="card text-center" style={{ padding: "40px 24px", background: "linear-gradient(135deg, #009bb9, #0284c7)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 16px 40px rgba(0, 155, 185, 0.25)" }}>
          <h2 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "12px", fontWeight: 800 }}>
            Ready to Write Your Success Story in India or USA?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "24px", maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
            Get 100% placement assistance, resume optimization, and interview referrals for high-paying roles across India and USA tech employers.
          </p>
          <Link to="/career-finder" className="btn btn-lg" style={{ background: "#ffffff", color: "#009bb9", fontWeight: 800 }}>
            Free Assessment →
          </Link>
        </div>
      </div>
    </div>
  );
}
