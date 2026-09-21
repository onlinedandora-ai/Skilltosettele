import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { careerPaths } from "@/data/careerPaths";
import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import { useCurrency } from "@/context/CurrencyContext";
import { getWhatsAppUrl } from "@/utils/constants";
import EnrollmentCheckoutModal from "@/components/checkout/EnrollmentCheckoutModal";
import { useSEO } from "@/utils/useSEO";

export default function CareerPathDetail() {
  const { slug } = useParams<{ slug: string }>();
  const path = careerPaths.find((p) => p.slug === slug) || careerPaths[0];
  const { formatPrice } = useCurrency();
  const [showBundleCheckout, setShowBundleCheckout] = useState(false);

  useSEO({
    title: `${path.title} Career Track`,
    description: path.description,
    canonical: `https://skilltosettle.com/career-paths/${path.slug}`,
    ogImage: path.image,
  });

  // Associated courses
  const matchedCourses = courses.filter((c) => c.categorySlug === path.slug);

  return (
    <div style={{ paddingTop: "24px", paddingBottom: "60px", minHeight: "100vh" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 36px", textAlign: "center" }}>
          <div className="section-eyebrow teal">
            <span>🎯 100% PLACEMENT ASSISTANCE • INDIA &amp; USA</span>
          </div>
          <h1 className="text-h1 mb-sm">{path.title} Career Path</h1>
          <p className="text-body-lg mb-md text-secondary">
            {path.description} Master modern workflows with 100% placement assistance across tech hiring networks in India &amp; USA.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "18px" }}>
            <span className="badge badge-teal">🎯 100% Placement Assistance</span>
            <span className="badge badge-amber" style={{ background: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", whiteSpace: "normal", wordBreak: "break-word", lineHeight: 1.3, maxWidth: "100%", display: "inline-flex", alignItems: "center", gap: "4px" }}>🎓 Course Completion Certificate Included</span>
            <span className="badge badge-accent">🇮🇳 India &amp; 🇺🇸 USA Placements</span>
            <span className="badge badge-accent">{path.duration} Program</span>
          </div>

          <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: "10px", padding: "clamp(10px, 3vw, 14px) clamp(12px, 3vw, 18px)", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "#166534", fontWeight: 600, maxWidth: "100%", boxSizing: "border-box", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>🎓</span>
            <span style={{ flex: "1 1 220px", wordBreak: "break-word" }}><strong>Course Completion Certificate &amp; 100% Placement Assistance:</strong> Receive accredited certificates for every completed milestone, resume optimization, and interview referrals across India &amp; USA.</span>
          </div>
        </div>

        {/* Visual Roadmap Hero Banner */}
        <div style={{ borderRadius: "16px", overflow: "hidden", height: "260px", marginBottom: "36px", boxShadow: "0 12px 36px rgba(0, 155, 185, 0.12)", position: "relative" }}>
          <img src={path.image} alt={path.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)" }}></div>
          <div style={{ position: "absolute", bottom: "24px", left: "28px", right: "28px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#38bdf8", background: "rgba(15, 23, 42, 0.8)", padding: "4px 12px", borderRadius: "999px", border: "1px solid rgba(56, 189, 248, 0.4)", textTransform: "uppercase" }}>
                Curated Career Track
              </span>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff", marginTop: "8px", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                {path.title}
              </h2>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff", background: "rgba(0, 155, 185, 0.85)", padding: "6px 14px", borderRadius: "8px", backdropFilter: "blur(4px)" }}>
                {path.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Career Milestone Steps */}
        <div className="card mb-2xl" style={{ padding: "28px", background: "var(--bg-card)" }}>
          <h2 className="text-h3 mb-md text-center">Step-by-Step Learning Progression</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {path.courses.map((courseName, i) => (
              <div key={i} style={{ background: "var(--bg-muted)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-accent)", fontWeight: 700 }}>
                  STAGE 0{i + 1}
                </span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginTop: "4px" }}>{courseName}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Live cohort mastery + Course Completion Certificate Included
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bundle Pricing Stack Card */}
        <div className="card mb-2xl" style={{ padding: "36px 28px", background: "linear-gradient(135deg, #009bb9, #0284c7)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 16px 40px rgba(0, 155, 185, 0.25)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            <div>
              <span className="section-eyebrow teal mb-sm" style={{ background: "rgba(255,255,255,0.15)", color: "#ffffff", borderColor: "rgba(255,255,255,0.3)" }}>
                ALL-IN-ONE CAREER BUNDLE
              </span>
              <h2 style={{ fontSize: "1.8rem", color: "#ffffff", marginBottom: "12px" }}>
                {path.title} Master Career Pack
              </h2>
              <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "20px", fontSize: "0.95rem", lineHeight: 1.6 }}>
                Enroll in the complete {path.title} track including all foundational modules, advanced specializations, 1-on-1 resume transformation, and mock technical interview rounds.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.95)" }}>✓ All live cohort access & lifetime recordings</span>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.95)" }}>✓ Course Completion Certificate Included for every completed program</span>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.95)" }}>✓ 3+ Capstone portfolio project reviews by mentors</span>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.95)" }}>✓ 1-on-1 technical mock interview simulation</span>
              </div>
            </div>
            <div style={{ background: "var(--bg-white, #ffffff)", color: "var(--text-primary)", padding: "28px", borderRadius: "16px", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#166534", background: "#dcfce7", padding: "4px 10px", borderRadius: "999px" }}>
                BUNDLE SAVINGS: 35% OFF
              </span>
              <div style={{ margin: "16px 0" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                  {formatPrice(49999)}
                </span>
                <span style={{ fontSize: "1.1rem", color: "var(--text-muted)", textDecoration: "line-through", marginLeft: "10px" }}>
                  {formatPrice(75000)}
                </span>
              </div>
              <button
                onClick={() => setShowBundleCheckout(true)}
                className="btn btn-primary btn-lg w-full mb-xs"
              >
                Reserve Bundle →
              </button>
              <a
                href={getWhatsAppUrl(`Hi, I have questions about the ${path.title} Career Pack Bundle.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm w-full mt-xs"
              >
                WhatsApp Advisor
              </a>
              <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "10px" }}>
                🔒 Secure 256-Bit SSL Checkout · Instant Seat Confirmation
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

      {/* Bundle Razorpay Checkout Modal */}
      <EnrollmentCheckoutModal
        isOpen={showBundleCheckout}
        onClose={() => setShowBundleCheckout(false)}
        title={`${path.title} Master Career Pack`}
        category="All-In-One Career Track Bundle"
        price={49999}
        originalPrice={75000}
        duration={path.duration}
        batch="Upcoming Master Cohort"
        slug={path.slug}
      />
    </div>
  );
}
