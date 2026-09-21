import React, { useState } from "react";
import { Link } from "react-router-dom";
import { liveClasses } from "@/data/testimonials";
import { getCourseBySlug } from "@/data/courses";
import { getInstructorByName } from "@/data/instructors";
import { useCurrency } from "@/context/CurrencyContext";
import EnrollmentCheckoutModal from "@/components/checkout/EnrollmentCheckoutModal";
import { useSEO } from "@/utils/useSEO";

export default function LiveClasses() {
  useSEO({
    title: "Live Interactive Tech Cohorts & Batches | SkilltoSettle",
    description: "Join live interactive training cohorts led by enterprise mentors. Weekend and evening batches with 1-on-1 code reviews and 100% placement assistance.",
    canonical: "https://skilltosettle.com/live-classes",
  });

  const { formatPrice } = useCurrency();
  const [selectedBatch, setSelectedBatch] = useState<typeof liveClasses[0] | null>(null);

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "60px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h1 className="text-h1 mb-sm">Live Cohort Schedules (India &amp; USA Friendly)</h1>
          <p className="text-body-lg">
            Interact live with senior industry mentors, ask questions in real time, and gain <strong>100% Placement Assistance</strong> with interactive schedules convenient for both <strong>India (IST)</strong> and <strong>USA (EST / CST / PST)</strong> timezones.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "14px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "5px 14px", borderRadius: "999px" }}>
              🎯 100% PLACEMENT ASSISTANCE
            </span>
            <span style={{ fontSize: "clamp(0.7rem, 2.8vw, 0.8rem)", fontWeight: 700, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "5px 14px", borderRadius: "999px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
              🎓 COURSE COMPLETION CERTIFICATE INCLUDED
            </span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0369a1", background: "#f0f9ff", border: "1px solid #bae6fd", padding: "5px 14px", borderRadius: "999px" }}>
              🇮🇳 INDIA &amp; 🇺🇸 USA FRIENDLY TIMINGS
            </span>
          </div>
        </div>

        <div className="grid-2 mb-2xl">
          {liveClasses.map((batch) => {
            const inst = getInstructorByName(batch.instructor);
            const courseObj = getCourseBySlug(batch.slug);
            return (
              <div key={batch.id} className="card" style={{ padding: "0", overflow: "hidden", background: "var(--bg-card)", display: "flex", flexDirection: "column" }}>
                {courseObj?.image && (
                  <div style={{ position: "relative", width: "100%", height: "140px", overflow: "hidden" }}>
                    <img
                      src={courseObj.image}
                      alt={batch.course}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)" }}></div>
                    <div style={{ position: "absolute", top: "10px", left: "12px", right: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", zIndex: 2 }}>
                      <span className="badge badge-coral" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>🔴 Live Cohort</span>
                      <span className="badge badge-amber" style={{ whiteSpace: "nowrap", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>{batch.seatsLeft} seats left</span>
                    </div>
                  </div>
                )}

                <div style={{ padding: "clamp(16px, 4vw, 24px)", display: "flex", flexDirection: "column", flex: 1 }}>
                  {!courseObj?.image && (
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "6px" }}>
                      <span className="badge badge-coral">🔴 Live Cohort</span>
                      <span className="badge badge-amber" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>{batch.seatsLeft} seats left</span>
                    </div>
                  )}

                  {/* Highlights Bar */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "#166534", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "3px 9px", borderRadius: "999px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      🎯 100% Placement Assistance
                    </span>
                    <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "3px 9px", borderRadius: "999px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      🎓 Certificate Included
                    </span>
                  </div>

                  <h2 className="text-h3 mb-sm" style={{ wordBreak: "break-word", lineHeight: 1.3 }}>{batch.course}</h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", background: "var(--bg-muted)", padding: "14px 16px", borderRadius: "12px", marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "4px 12px" }}>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", flexShrink: 0 }}>Start Date:</span>
                      <span style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary)" }}>{batch.startDate}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4px 12px" }}>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", flexShrink: 0, minWidth: "68px" }}>Timings:</span>
                      <span style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary)", textAlign: "right", flex: "1 1 180px", wordBreak: "break-word", minWidth: 0 }}>
                        {batch.time}
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "4px 12px" }}>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", flexShrink: 0 }}>Duration:</span>
                      <span style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--text-primary)" }}>{batch.duration}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4px 12px" }}>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", flexShrink: 0, minWidth: "85px" }}>Certification:</span>
                      <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "#009bb9", textAlign: "right", flex: "1 1 180px", wordBreak: "break-word", minWidth: 0 }}>
                        🎓 Course Completion Certificate Included
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px 12px" }}>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", flexShrink: 0 }}>Lead Mentor:</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                        {inst?.avatar && (
                          <img
                            src={inst.avatar}
                            alt={batch.instructor}
                            style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover" }}
                          />
                        )}
                        <span style={{ fontSize: "0.86rem", fontWeight: 700, color: "var(--color-accent)" }}>{batch.instructor}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid var(--border-light)", marginTop: "auto", flexWrap: "wrap", gap: "12px" }}>
                    <div>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", display: "block" }}>Cohort Fee:</span>
                      <span style={{ fontSize: "1.35rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                        {formatPrice(batch.price)}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      <button
                        onClick={() => setSelectedBatch(batch)}
                        className="btn btn-primary btn-sm"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Reserve Seat →
                      </button>
                      <Link to={`/courses/${batch.slug}`} className="btn btn-outline btn-sm" style={{ whiteSpace: "nowrap" }}>
                        Syllabus
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Razorpay Checkout Modal for selected batch */}
      {selectedBatch && (
        <EnrollmentCheckoutModal
          isOpen={!!selectedBatch}
          onClose={() => setSelectedBatch(null)}
          title={selectedBatch.course}
          category="Live Cohort Batch"
          price={selectedBatch.price}
          originalPrice={Math.round(selectedBatch.price * 1.25)}
          duration={selectedBatch.duration}
          instructor={selectedBatch.instructor}
          batch={selectedBatch.startDate}
          slug={selectedBatch.slug}
        />
      )}
    </div>
  );
}
