import React from "react";
import { useParams, Link } from "react-router-dom";
import { careerPaths } from "@/data/careerPaths";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";

export default function CareerPathDetail() {
  const { slug } = useParams<{ slug: string }>();
  const path = careerPaths.find((p) => p.slug === slug) || careerPaths[0];

  // Associated courses
  const matchedCourses = courses.filter((c) => c.categorySlug === path.slug);

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 48px", textAlign: "center" }}>
          <div className="section-eyebrow teal">
            <span>{path.icon}</span> CAREER PATH ROADMAP
          </div>
          <h1 className="text-h1 mb-sm">{path.title} Career Path</h1>
          <p className="text-body-lg mb-md text-secondary">{path.description}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <span className="badge badge-accent">⏳ {path.duration} Program</span>
            <span className="badge badge-teal">💼 3+ Capstone Projects</span>
            <span className="badge badge-amber">📜 Verified Certification</span>
          </div>
        </div>

        {/* Career Milestone Steps */}
        <div className="card mb-2xl" style={{ padding: "36px", background: "#ffffff" }}>
          <h2 className="text-h3 mb-md text-center">Step-by-Step Learning Progression</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {path.courses.map((courseName, i) => (
              <div key={i} style={{ background: "var(--bg-muted)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-accent)", fontWeight: 700 }}>
                  STAGE 0{i + 1}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginTop: "4px" }}>{courseName}</h3>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Live cohort mastery + targeted hands-on labs
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Pricing Stack Card */}
        <div className="card mb-2xl" style={{ padding: "40px", background: "linear-gradient(135deg, #009bb9, #0284c7)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 16px 40px rgba(0, 155, 185, 0.25)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "32px", alignItems: "center" }}>
            <div>
              <span className="section-eyebrow teal mb-sm">💎 ALL-IN-ONE CAREER BUNDLE</span>
              <h2 style={{ fontSize: "1.8rem", color: "#ffffff", marginBottom: "12px" }}>
                {path.title} Master Career Pack
              </h2>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "20px", fontSize: "0.95rem" }}>
                Enroll in the complete {path.title} track including all foundational modules, advanced specializations, 1-on-1 resume transformation, and mock technical interview rounds.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)" }}>✓ All live cohort access & lifetime recordings</span>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)" }}>✓ 3+ Capstone portfolio project reviews by mentors</span>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.9)" }}>✓ 1-on-1 technical mock interview simulation</span>
              </div>
            </div>
            <div style={{ background: "#ffffff", color: "var(--text-primary)", padding: "32px", borderRadius: "16px", textAlign: "center" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#166534", background: "#dcfce7", padding: "3px 8px", borderRadius: "999px" }}>
                BUNDLE SAVINGS: 35% OFF
              </span>
              <div style={{ margin: "16px 0" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: 800, fontFamily: "var(--font-display)" }}>₹49,999</span>
                <span style={{ fontSize: "1.1rem", color: "var(--text-muted)", textDecoration: "line-through", marginLeft: "10px" }}>₹75,000</span>
              </div>
              <a
                href={`https://wa.me/919999999999?text=Hi,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(path.title)}%20Career%20Pack%20Bundle.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg w-full"
              >
                Enroll in Career Bundle →
              </a>
              <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "10px" }}>
                🔒 Razorpay Secure Checkout · 0% EMI Available
              </span>
            </div>
          </div>
        </div>

        {/* Matched Individual Courses */}
        {matchedCourses.length > 0 && (
          <div>
            <h2 className="text-h2 mb-md">Individual Programs in This Track</h2>
            <div className="grid-3 mb-2xl">
              {matchedCourses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
