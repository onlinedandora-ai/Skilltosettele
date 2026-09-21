import React from "react";
import { Link } from "react-router-dom";
import { careerPaths } from "@/data/careerPaths";
import { useSEO } from "@/utils/useSEO";

export default function CareerPaths() {
  useSEO({
    title: "High-Growth Tech Career Paths & Roadmaps | SkilltoSettle",
    description: "Step-by-step career path roadmaps for Data Engineers, DevOps Specialists, Cloud Architects, and Full-Stack Developers in India & USA.",
    canonical: "https://skilltosettle.com/career-paths",
  });

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "60px", minHeight: "100vh" }}>
      <section className="container mb-2xl">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h1 className="text-h1 mb-sm">Career Roadmaps for India &amp; USA Tech Roles</h1>
          <p className="text-body-lg mb-md">
            Stop guessing what skills to learn next. Pick a high-growth career path with <strong>100% Placement Assistance</strong>, end-to-end curriculum, live mentorship, and capstone projects across India and USA job markets.
          </p>
          
          {/* Certificate Notice Banner */}
          <div style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)", border: "1.5px solid #a7f3d0", borderRadius: "12px", padding: "clamp(12px, 3vw, 16px)", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "16px auto 32px", maxWidth: "800px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>🎓</span>
            <p style={{ margin: 0, fontSize: "0.92rem", color: "#166534", fontWeight: 600, flex: "1 1 240px", wordBreak: "break-word" }}>
              <strong>Course Completion Certificate Included:</strong> Build job-ready skills step by step, earn an accredited certificate, and get <strong>100% Placement Assistance</strong> across India &amp; USA.
            </p>
          </div>
        </div>

        <div className="grid-3">
          {careerPaths.map((path) => (
            <div key={path.id} className="card" style={{ padding: "clamp(16px, 4vw, 24px)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "6px" }}>
                <span className="badge badge-accent">{path.duration}</span>
                <span className="badge badge-teal">Live Cohort</span>
                <span className="badge badge-amber" style={{ background: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", whiteSpace: "normal", wordBreak: "break-word", lineHeight: 1.3, maxWidth: "100%", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  🎓 Course Completion Certificate Included
                </span>
              </div>

              <h2 className="text-h3 mb-sm">{path.title}</h2>
              <p className="text-body mb-lg text-secondary" style={{ flex: 1 }}>{path.description}</p>

              <div style={{ marginBottom: "16px" }}>
                <span className="label" style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px", display: "block" }}>
                  Included Technologies:
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {path.courses.map((c, i) => (
                    <span key={i} className="tag">{c}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <span className="label" style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px", display: "block" }}>
                  Target Job Roles:
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {path.roles.map((r, i) => (
                    <span key={i} style={{ fontSize: "0.82rem", fontWeight: 600, color: "#166534" }}>
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              <Link to={`/career-paths/${path.slug}`} className="btn btn-primary btn-sm w-full mt-auto">
                Explore Full Track →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
