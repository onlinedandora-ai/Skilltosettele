import React from "react";
import { Link } from "react-router-dom";
import { testimonials } from "@/data/testimonials";
import StarRating from "@/components/ui/StarRating";

export default function SuccessStories() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🌟</span> ALUMNI TRANSFORMATIONS
          </div>
          <h1 className="text-h1 mb-sm">Real Students. Real Career Shifts.</h1>
          <p className="text-body-lg">
            Read how professionals across India and abroad moved from non-tech, operations, and legacy roles into high-growth Data, DevOps, and Business Analyst careers.
          </p>
        </div>

        <div className="grid-3 mb-2xl">
          {testimonials.map((t) => (
            <div key={t.id} className="card" style={{ padding: "28px", background: "#ffffff", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, var(--color-accent), var(--color-teal))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>{t.name}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{t.role} at <strong>{t.company}</strong></p>
                </div>
              </div>

              <div style={{ background: "var(--bg-muted)", padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>
                <div style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "4px" }}>
                  <strong>BEFORE:</strong> {t.before}
                </div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#166534" }}>
                  <strong>AFTER:</strong> {t.after}
                </div>
              </div>

              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "20px", flex: 1, fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid #f0f2f8" }}>
                <span className="tag">{t.course}</span>
                <StarRating rating={t.rating} showText={false} />
              </div>
            </div>
          ))}
        </div>

        <div className="card text-center" style={{ padding: "40px", background: "linear-gradient(135deg, #009bb9, #0284c7)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 16px 40px rgba(0, 155, 185, 0.25)" }}>
          <h2 style={{ fontSize: "1.75rem", color: "#ffffff", marginBottom: "12px", fontWeight: 800 }}>
            Ready to Write Your Own Success Story?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "24px", maxWidth: "560px", margin: "0 auto 24px" }}>
            Take our 2-minute Career Assessment Quiz and speak with our senior counseling team to find your ideal learning path.
          </p>
          <Link to="/career-finder" className="btn btn-outline-white btn-lg" style={{ background: "#ffffff", color: "#009bb9", fontWeight: 800 }}>
            Start Free Career Assessment →
          </Link>
        </div>
      </div>
    </div>
  );
}
