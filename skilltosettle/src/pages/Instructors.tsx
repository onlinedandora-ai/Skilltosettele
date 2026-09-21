import React from "react";
import { instructors } from "@/data/instructors";
import { getWhatsAppUrl } from "@/utils/constants";
import { useSEO } from "@/utils/useSEO";

export default function InstructorsPage() {
  useSEO({
    title: "Meet Lead Mentors & Industry Architects | SkilltoSettle",
    description: "Learn directly from senior industry architects with 10+ years of experience in DevOps, AI, Cyber Security, and Data Science across India & USA.",
    canonical: "https://skilltosettle.com/instructors",
  });

  const mentorGradients: Record<string, { gradient: string; initials: string }> = {
    suresh: { gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)", initials: "SU" },
    nikhil: { gradient: "linear-gradient(135deg, #f59e0b, #d97706)", initials: "NK" },
    kiran: { gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)", initials: "KI" },
    eswar: { gradient: "linear-gradient(135deg, #0284c7, #06b6d4)", initials: "ES" },
    narendra: { gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", initials: "NA" },
    shyam: { gradient: "linear-gradient(135deg, #0d9488, #059669)", initials: "SH" },
    gurpreet: { gradient: "linear-gradient(135deg, #10b981, #047857)", initials: "GU" },
  };

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "60px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h1 className="text-h1 mb-sm">Meet Your Mentors (India &amp; USA Ecosystems)</h1>
          <p className="text-body-lg">
            Every instructor at SkilltoSettle is an industry practitioner leading enterprise engineering, data architecture, or business strategy across <strong>India &amp; the USA</strong>. All cohorts include <strong>100% Placement Assistance</strong>.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 14px", borderRadius: "999px" }}>
              🎯 100% PLACEMENT ASSISTANCE
            </span>
            <span style={{ fontSize: "clamp(0.7rem, 2.8vw, 0.8rem)", fontWeight: 700, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "5px 14px", borderRadius: "999px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
              🎓 COURSE COMPLETION CERTIFICATE INCLUDED
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "5px 14px", borderRadius: "999px" }}>
              👨‍🏫 1-ON-1 ARCHITECT MENTORSHIP
            </span>
          </div>
        </div>

        <div className="grid-3 mb-2xl">
          {instructors.map((inst) => {
            const grad = mentorGradients[inst.slug] || { gradient: "linear-gradient(135deg, #009bb9, #0284c7)", initials: inst.name.slice(0, 2).toUpperCase() };
            return (
              <div key={inst.id} className="card" style={{ padding: "28px", background: "var(--bg-card)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  {inst.avatar ? (
                    <img
                      src={inst.avatar}
                      alt={inst.name}
                      style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-accent)", flexShrink: 0 }}
                    />
                  ) : (
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: grad.gradient, color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.4rem", flexShrink: 0, boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>
                      {grad.initials}
                    </div>
                  )}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "2px" }}>{inst.name}</h3>
                      {inst.badge && (
                        <span style={{ fontSize: "0.68rem", fontWeight: 800, background: "var(--color-primary-light)", color: "var(--color-primary)", padding: "2px 6px", borderRadius: "4px" }}>
                          {inst.badge}
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: "0.84rem", color: "var(--color-accent)", fontWeight: 600 }}>{inst.title}</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <span className="badge badge-accent" style={{ background: "var(--color-primary-light)", color: "var(--color-primary)", padding: "4px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>{inst.experience}</span>
                  <span className="badge badge-teal" style={{ background: "var(--color-teal-light)", color: "var(--color-teal)", padding: "4px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>{inst.specialization}</span>
                  <span className="badge badge-amber" style={{ background: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", padding: "4px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>🎓 Course Completion Certificate Included</span>
                </div>

                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "20px", flex: 1 }}>
                  {inst.bio}
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <span className="label" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px", display: "block" }}>
                    Flagship Cohorts:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {inst.courses.map((c, i) => (
                      <span key={i} style={{ fontSize: "0.84rem", color: "var(--text-primary)", fontWeight: 600, background: "var(--bg-muted)", padding: "3px 8px", borderRadius: "4px" }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(`Hi! I would like to schedule a 1-on-1 counseling session for cohorts mentored by ${inst.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <span>💬 WhatsApp Consultation with {inst.name}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
