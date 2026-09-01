import React from "react";
import { instructors } from "@/data/instructors";

export default function Instructors() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>👨‍🏫</span> EXPERT MENTORS
          </div>
          <h1 className="text-h1 mb-sm">Meet Our Lead Instructors</h1>
          <p className="text-body-lg">
            Every instructor at Skillsettle is a vetted industry veteran actively working in top technology enterprises with 7+ years of hands-on architectural experience.
          </p>
        </div>

        <div className="grid-2 mb-2xl">
          {instructors.map((inst) => (
            <div key={inst.id} className="card" style={{ padding: "36px", background: "#ffffff" }}>
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "14px", background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", fontWeight: 800 }}>
                  {inst.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-h3 mb-xs">{inst.name}</h2>
                  <p style={{ color: "var(--color-accent)", fontWeight: 600, fontSize: "0.95rem" }}>{inst.title}</p>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "4px", display: "block" }}>
                    💼 {inst.experience} · 🎓 {inst.studentsCount.toLocaleString()}+ Mentored
                  </span>
                </div>
              </div>

              <p className="text-body text-secondary mb-md">{inst.bio}</p>

              <div style={{ marginBottom: "16px" }}>
                <span className="label">Core Specializations:</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {inst.skills.map((s, i) => (
                    <span key={i} className="tag">{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <span className="label">Cohorts Mentored:</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {inst.courses.map((c, i) => (
                    <span key={i} style={{ fontSize: "0.82rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                      • {c}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/919999999999?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20cohorts%20led%20by%20${encodeURIComponent(inst.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm w-full"
              >
                Request 1-on-1 Consultation →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
