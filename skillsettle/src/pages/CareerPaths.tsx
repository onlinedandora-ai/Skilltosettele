import React from "react";
import { Link } from "react-router-dom";
import { careerPaths } from "@/data/careerPaths";

export default function CareerPaths() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <section className="container mb-2xl">
        <div className="section-header">
          <div className="section-eyebrow teal">
            <span>🧭</span> STRUCTURED ROADMAPS
          </div>
          <h1 className="text-h1 mb-sm">Explore Career Paths</h1>
          <p className="text-body-lg">
            Stop guessing what skills to learn next. Pick a high-growth career path with an end-to-end curriculum, live mentorship, and capstone projects.
          </p>
        </div>

        <div className="grid-3">
          {careerPaths.map((path) => (
            <div key={path.id} className="card" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ fontSize: "2.5rem" }}>{path.icon}</span>
                <span className="badge badge-outline">⏳ {path.duration}</span>
              </div>

              <h2 className="text-h3 mb-sm">{path.title}</h2>
              <p className="text-body mb-lg text-secondary" style={{ flex: 1 }}>{path.description}</p>

              <div style={{ marginBottom: "16px" }}>
                <span className="label">Included Technologies:</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {path.courses.map((c, i) => (
                    <span key={i} className="tag">{c}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <span className="label">Target Job Roles:</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {path.roles.map((r, i) => (
                    <span key={i} style={{ fontSize: "0.82rem", fontWeight: 600, color: "#166534" }}>
                      ✓ {r}
                    </span>
                  ))}
                </div>
              </div>

              <Link to={`/career-paths/${path.slug}`} className="btn btn-primary btn-sm w-full mt-auto">
                Explore {path.title} Path →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
