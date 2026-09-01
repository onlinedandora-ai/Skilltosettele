import React from "react";
import { Link } from "react-router-dom";
import { liveClasses } from "@/data/testimonials";

export default function LiveClasses() {
  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>📅</span> UPCOMING BATCHES
          </div>
          <h1 className="text-h1 mb-sm">Live Cohort Schedules</h1>
          <p className="text-body-lg">
            Interact live with senior industry mentors, ask questions during sessions, and participate in active group coding & architecture labs.
          </p>
        </div>

        <div className="grid-2 mb-2xl">
          {liveClasses.map((batch) => (
            <div key={batch.id} className="card" style={{ padding: "32px", background: "#ffffff" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span className="badge badge-coral">🔴 Live Batch</span>
                <span className="badge badge-amber">⚡ Only {batch.seatsLeft} seats left</span>
              </div>

              <h2 className="text-h3 mb-sm">{batch.course}</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", background: "var(--bg-muted)", padding: "16px", borderRadius: "12px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Start Date:</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700 }}>{batch.startDate}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Timings:</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700 }}>{batch.time}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Duration:</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700 }}>{batch.duration}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Lead Mentor:</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--color-accent)" }}>{batch.instructor}</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>Tuition:</span>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-display)" }}>
                    ₹{batch.price.toLocaleString()}
                  </span>
                </div>
                <Link to={`/courses/${batch.slug}`} className="btn btn-primary btn-sm">
                  Reserve Seat Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
