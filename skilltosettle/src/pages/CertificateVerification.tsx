import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSEO } from "@/utils/useSEO";
import { getCertificateById, CertificateRecord } from "@/data/certificates";
import CertificateDocument from "@/components/certificate/CertificateDocument";
import { downloadCertificatePdf, downloadCertificateImage } from "@/utils/certificateExport";
import { CONTACT_CONFIG, getWhatsAppUrl } from "@/utils/constants";
import styles from "./CertificateVerification.module.css";

export default function CertificateVerification() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(id || "");
  const [cert, setCert] = useState<CertificateRecord | null>(null);
  const [searched, setSearched] = useState(false);
  const [showFullCert, setShowFullCert] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [orientation, setOrientation] = useState<"landscape" | "portrait">("landscape");
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [isExportingPng, setIsExportingPng] = useState(false);

  const handleCopyPrivateLink = () => {
    const privateUrl = `https://skilltosettle.com/certificate/${encodeURIComponent(cert?.id || id || searchQuery.trim().toUpperCase())}`;
    navigator.clipboard.writeText(privateUrl).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  const handleDownloadPdf = async () => {
    if (!cert) return;
    setIsExportingPdf(true);
    setShowFullCert(true);
    const elementId = `cert-${cert.id}`;
    await downloadCertificatePdf(elementId, cert.candidateName, cert.id, orientation);
    setIsExportingPdf(false);
  };

  const handleDownloadPng = async () => {
    if (!cert) return;
    setIsExportingPng(true);
    setShowFullCert(true);
    const elementId = `cert-${cert.id}`;
    await downloadCertificateImage(elementId, cert.candidateName, cert.id, orientation);
    setIsExportingPng(false);
  };

  const handleDownloadPrint = () => {
    setShowFullCert(true);
    const styleEl = document.createElement("style");
    styleEl.id = "dynamic-cert-print-page-style";
    styleEl.innerHTML = `@page { size: A4 ${orientation}; margin: 0; }`;
    document.head.appendChild(styleEl);
    setTimeout(() => {
      window.print();
      setTimeout(() => {
        styleEl.remove();
      }, 1200);
    }, 120);
  };

  useSEO({
    title: cert
      ? `Verified Certificate: ${cert.candidateName} (${cert.id}) | SkilltoSettle`
      : "Official Online Certificate Verification Portal | SkilltoSettle",
    description: cert
      ? `Official credential verification for ${cert.candidateName} in ${cert.courseTitle}. Verified by SkilltoSettle Global Academy.`
      : "Verify authenticity of SkilltoSettle graduate credentials, diplomas, and mentor-accredited capstone projects.",
    canonical: id ? `https://skilltosettle.com/verify/${encodeURIComponent(id)}` : "https://skilltosettle.com/verify",
  });

  useEffect(() => {
    if (id) {
      const found = getCertificateById(id);
      setCert(found || null);
      setSearchQuery(id);
      setSearched(true);
    } else {
      setCert(null);
      setSearched(false);
    }
  }, [id]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/verify/${encodeURIComponent(searchQuery.trim().toUpperCase())}`);
  };

  const recruiterWaMsg = cert
    ? `Hello SkilltoSettle Placement Desk! I am a recruiter verifying candidate ${cert.candidateName} (Credential ID: ${cert.id}, Course: ${cert.courseTitle}). I would like to inquire about their candidate profile and interview availability.`
    : "Hello SkilltoSettle Placement Desk! I am a recruiter inquiring about graduate verification and placement availability.";

  const recruiterMailSubject = cert
    ? `Recruiter Verification Inquiry: ${cert.candidateName} (${cert.id})`
    : "SkilltoSettle Credential Verification Inquiry";

  return (
    <div className={styles.pageWrapper}>
      <div className="container">
        {/* Verification Portal Search Bar */}
        <div className={`${styles.searchHero} no-print`}>
          <span className={styles.registryPill}>
            ONLINE CREDENTIAL REGISTRY
          </span>
          <h1 className={styles.portalTitle}>
            SkilltoSettle Official Credential Verification
          </h1>
          <p className={styles.portalSubtitle}>
            Verify tamper-proof certificates, graduate capstones, and mentor credentials recognized across India &amp; USA technology hiring networks.
          </p>

          <form onSubmit={handleSearchSubmit} className={styles.searchBox}>
            <input
              type="text"
              placeholder="Enter Credential ID (e.g. STS-SEC-2026-8942)"
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button type="submit" className={styles.searchBtn}>
              Verify Now
            </button>
          </form>

          {/* Private Lookup Helper */}
          {!cert && (
            <div className={styles.sampleCredentialsRow}>
              <span style={{ color: "#64748b" }}>🔒 Secure Registry: Enter your private credential ID or open via your direct certificate link.</span>
            </div>
          )}
        </div>

        {/* VERIFIED STUDENT RESULT CARD */}
        {cert ? (
          <div>
            <div className={`${styles.verificationCard} no-print`}>
              <div className={styles.verifiedRibbon}>
                <span>✓</span>
                <span>OFFICIAL VERIFIED GRADUATE CREDENTIAL</span>
              </div>

              <div className={styles.candidateHeader}>
                <div className={styles.candidateNameGroup}>
                  <h2 className={styles.candidateName}>{cert.candidateName}</h2>
                  <h3 className={styles.courseHeadline}>{cert.courseTitle}</h3>
                  {cert.specialization && (
                    <div className={styles.specSub}>
                      Specialization: {cert.specialization}
                    </div>
                  )}
                </div>

                <div className={styles.candidateIdBlock}>
                  <div className={styles.credIdCode}>
                    {cert.id}
                  </div>
                  <div className={styles.credIdRegistryLabel}>
                    Verified on SkilltoSettle Global Registry
                  </div>
                </div>
              </div>

              {/* Metadata Details Grid */}
              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Issued Date</span>
                  <span className={styles.metaVal}>{cert.issueDate}</span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Lead Technical Mentor</span>
                  <span className={styles.metaVal}>{cert.mentorName}</span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Accreditation Region</span>
                  <span className={styles.metaVal}>USA &amp; India Ecosystem</span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Graduation Status</span>
                  <span className={styles.metaVal} style={{ color: "#166534" }}>
                    ✓ Completed ({cert.grade || "Distinction"})
                  </span>
                </div>
              </div>

              {/* Capstone Project Showcase */}
              {cert.capstoneProject && (
                <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "16px 20px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.76rem", fontWeight: 800, color: "#166534", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Verified Production Capstone Project:
                  </span>
                  <div style={{ fontSize: "0.98rem", fontWeight: 800, color: "#14532d", marginTop: "4px" }}>
                    {cert.capstoneProject}
                  </div>
                </div>
              )}

              {/* Skills Verified */}
              {cert.skills && cert.skills.length > 0 && (
                <div className={styles.skillsWrapper}>
                  <div className={styles.skillsLabel}>Verified Competencies &amp; Technical Skills</div>
                  <div className={styles.skillsList}>
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillPill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* High-Fidelity Printable Certificate Preview */}
            <div className={styles.certPreviewWrap}>
              <div className={`${styles.previewHeaderBar} no-print`}>
                <div>
                  <h3 className={styles.previewSectionTitle}>
                    📜 Official Credential Document
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "#166534", fontWeight: 700, marginTop: "2px" }}>
                    A4 {orientation === "landscape" ? "Horizontal (Landscape)" : "Vertical (Portrait)"} · Official Verification Document
                  </div>
                </div>
                <div className={styles.previewBtnRow} style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                  {/* Orientation Switcher */}
                  <div style={{ display: "inline-flex", background: "#f1f5f9", padding: "2px", borderRadius: "8px", border: "1px solid #cbd5e1" }}>
                    <button
                      type="button"
                      onClick={() => setOrientation("landscape")}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "6px",
                        border: "none",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        background: orientation === "landscape" ? "#0284c7" : "transparent",
                        color: orientation === "landscape" ? "#ffffff" : "#475569",
                      }}
                    >
                      🖥️ Horizontal
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrientation("portrait")}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "6px",
                        border: "none",
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        background: orientation === "portrait" ? "#0284c7" : "transparent",
                        color: orientation === "portrait" ? "#ffffff" : "#475569",
                      }}
                    >
                      📱 Vertical
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    disabled={isExportingPdf}
                    className="btn btn-primary btn-sm"
                    style={{ background: "#16a34a", borderColor: "#16a34a" }}
                  >
                    {isExportingPdf ? "⏳ Generating..." : "📄 Download PDF"}
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadPng}
                    disabled={isExportingPng}
                    className="btn btn-outline btn-sm"
                  >
                    {isExportingPng ? "⏳ Generating..." : "🖼️ Download Image"}
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadPrint}
                    className="btn btn-outline btn-sm"
                  >
                    🖨️ Print
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyPrivateLink}
                    className="btn btn-outline btn-sm"
                    style={{
                      background: copiedLink ? "#dcfce7" : undefined,
                      color: copiedLink ? "#166534" : undefined,
                      borderColor: copiedLink ? "#86efac" : undefined,
                      fontWeight: copiedLink ? 700 : undefined,
                    }}
                  >
                    {copiedLink ? "✓ Copied Private Link!" : "📋 Copy Private Link"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowFullCert(!showFullCert)}
                    className="btn btn-outline btn-sm"
                  >
                    {showFullCert ? "Hide Document" : "Show Document"}
                  </button>
                </div>
              </div>

              {showFullCert && (
                <div className={styles.certScrollWrapper}>
                  <div className={`${styles.mobileSwipeHint} no-print`}>
                    <span>↔️ Swipe horizontally or rotate phone to inspect document in full detail</span>
                  </div>
                  <div className="printable-cert-root">
                    <CertificateDocument cert={cert} orientation={orientation} />
                  </div>
                </div>
              )}
            </div>

            {/* RECRUITER DIRECT CONTACT & PLACEMENT DESK INQUIRY */}
            <div className={`${styles.recruiterContactCard} no-print`}>
              <div className={styles.recruiterLeft}>
                <div className={styles.recruiterBadge}>
                  <span>🎯 RECRUITER &amp; HIRING MANAGER DESK</span>
                </div>
                <h3 className={styles.recruiterTitle}>
                  Interested in Hiring {cert.candidateName}?
                </h3>
                <p className={styles.recruiterDesc}>
                  SkilltoSettle connects high-growth tech enterprises across India and the USA with pre-vetted, capstone-tested graduates. Contact our admissions and placement desk to request candidate resumes, schedule technical interviews, or partner with us.
                </p>
                <div style={{ marginTop: "14px", fontSize: "0.85rem", color: "#cbd5e1", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <span>📞 India: <strong>{CONTACT_CONFIG.indiaPhone}</strong></span>
                  <span>🇺🇸 USA: <strong>{CONTACT_CONFIG.usaPhone}</strong></span>
                </div>
              </div>

              <div className={styles.recruiterActions}>
                <a
                  href={getWhatsAppUrl(recruiterWaMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.recruiterWaBtn}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  <span>Inquire via WhatsApp Desk</span>
                </a>

                <a
                  href={`mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(recruiterMailSubject)}&body=${encodeURIComponent(recruiterWaMsg)}`}
                  className={styles.recruiterMailBtn}
                >
                  <span>✉️ Email Placement Director</span>
                </a>

                <Link
                  to="/contact"
                  style={{ color: "#38bdf8", fontSize: "0.8rem", textAlign: "center", textDecoration: "none", fontWeight: 700 }}
                >
                  View Corporate Hiring Network →
                </Link>
              </div>
            </div>
          </div>
        ) : searched ? (
          /* NOT FOUND SCREEN */
          <div className={styles.notFoundBox}>
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>⚠️</div>
            <h3 className={styles.notFoundTitle}>Credential Not Found</h3>
            <p style={{ color: "#881337", maxWidth: "560px", margin: "0 auto 18px", fontSize: "0.95rem" }}>
              No verified certificate was found matching Credential ID <strong>&ldquo;{searchQuery}&rdquo;</strong>. Please check for typos or contact the admissions verification desk directly.
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <a
                href={getWhatsAppUrl(`Hi SkilltoSettle! I am trying to verify Credential ID ${searchQuery}, but it is not loading on the verification portal.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Contact Verification Desk on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline btn-sm">
                Admissions Desk
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
