import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useSEO } from "@/utils/useSEO";
import { getAllCertificates } from "@/data/certificates";
import { getAllSales, getSalesAnalytics } from "@/data/sales";
import { getWhatsAppUrl, CONTACT_CONFIG } from "@/utils/constants";
import styles from "./Profile.module.css";

export default function Profile() {
  useSEO({
    title: "My Profile & Learning Desk | SkilltoSettle",
    description: "Manage your SkilltoSettle learner credentials, certified course completions, and placement assistance records.",
  });

  const {
    user,
    isAuthenticated,
    isAdmin,
    logout,
    getAdminCredentials,
    getRegisteredStudents,
    updateAdminCredentials,
    updateStudentCredentials,
  } = useAuth();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  // Admin Change Password Modal
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [adminPassConfirm, setAdminPassConfirm] = useState("");
  const [statusMsg, setStatusMsg] = useState<{ text: string; error: boolean } | null>(null);
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);

  // Student Change Password Modal
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentPass, setStudentPass] = useState("");
  const [studentPassConfirm, setStudentPassConfirm] = useState("");
  const [studentStatusMsg, setStudentStatusMsg] = useState<{ text: string; error: boolean } | null>(null);

  const handleOpenStudentModal = () => {
    setStudentName(user?.name || "");
    setStudentPass("");
    setStudentPassConfirm("");
    setStudentStatusMsg(null);
    setShowStudentModal(true);
  };

  const handleSaveStudentSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setStudentStatusMsg(null);

    if (studentPass) {
      if (studentPass.length < 6) {
        setStudentStatusMsg({ text: "Password must be at least 6 characters.", error: true });
        return;
      }
      if (studentPass !== studentPassConfirm) {
        setStudentStatusMsg({ text: "Passwords do not match. Please re-type.", error: true });
        return;
      }
    }

    if (!studentName.trim()) {
      setStudentStatusMsg({ text: "Please enter your name.", error: true });
      return;
    }

    if (user) {
      const res = updateStudentCredentials(user.email, {
        name: studentName.trim(),
        password: studentPass.trim() || undefined,
      });

      if (res.success) {
        setStudentStatusMsg({ text: "✓ Your profile & password have been updated successfully!", error: false });
        setTimeout(() => setShowStudentModal(false), 1500);
      } else {
        setStudentStatusMsg({ text: res.message || "Failed to update profile.", error: true });
      }
    }
  };

  const handleCopyCertLink = (certId: string) => {
    const privateUrl = `https://skilltosettle.com/certificate/${encodeURIComponent(certId)}`;
    navigator.clipboard.writeText(privateUrl).then(() => {
      setCopiedCertId(certId);
      setTimeout(() => setCopiedCertId(null), 2500);
    });
  };

  const certificates = getAllCertificates();
  const students = getRegisteredStudents();

  // Open Admin Settings
  const handleOpenAdminModal = () => {
    const creds = getAdminCredentials();
    setAdminName(creds.name);
    setAdminEmail(creds.email);
    setAdminPass("");
    setAdminPassConfirm("");
    setStatusMsg(null);
    setShowAdminModal(true);
  };

  // Save Admin Settings
  const handleSaveAdminSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!adminEmail.trim() || !adminEmail.includes("@")) {
      setStatusMsg({ text: "Please enter a valid administrator email.", error: true });
      return;
    }

    if (adminPass) {
      if (adminPass.length < 6) {
        setStatusMsg({ text: "Password must be at least 6 characters.", error: true });
        return;
      }
      if (adminPass !== adminPassConfirm) {
        setStatusMsg({ text: "Passwords do not match.", error: true });
        return;
      }
    }

    const res = updateAdminCredentials({
      name: adminName.trim() || undefined,
      email: adminEmail.trim(),
      password: adminPass ? adminPass.trim() : undefined,
    });

    if (res.success) {
      setStatusMsg({ text: "✓ Admin credentials updated successfully!", error: false });
      setTimeout(() => {
        setShowAdminModal(false);
        setStatusMsg(null);
      }, 1500);
    } else {
      setStatusMsg({ text: "Failed to update admin credentials.", error: true });
    }
  };

  // If Not Authenticated
  if (!isAuthenticated || !user) {
    return (
      <div className={styles.pageContainer}>
        <div className="container" style={{ maxWidth: "540px" }}>
          <div className={styles.profileCard} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>👤</div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>
              Sign In to View Profile
            </h1>
            <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "24px" }}>
              Access your enrolled courses, verified completion certificates, and placement desk status.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Link to="/login" className="btn btn-primary w-full">
                🎓 Student / Learner Login →
              </Link>
              <Link
                to="/login?role=admin"
                className="btn btn-outline w-full"
                style={{ borderColor: "#7c3aed", color: "#7c3aed" }}
              >
                🛡️ Admin Portal Login →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // ADMIN PROFILE VIEW
  // ----------------------------------------------------
  if (isAdmin) {
    const adminCreds = getAdminCredentials();
    const salesAnalytics = getSalesAnalytics();
    const allSales = getAllSales();

    return (
      <div className={styles.pageContainer}>
        <div className="container" style={{ maxWidth: "1080px" }}>
          {/* Breadcrumbs */}
          <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
            <Link to="/" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>/</span>
            <span>Administrator Profile</span>
          </div>

          {/* Profile Header Banner */}
          <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
              <div className={styles.profileIdentity}>
                <div className={`${styles.avatarCircle} ${styles.avatarAdmin}`}>
                  🛡️
                </div>
                <div className={styles.profileInfo}>
                  <h1>{user.name || "Administrator"}</h1>
                  <p className={styles.profileEmail}>{user.email}</p>
                  <div className={styles.badgeRow}>
                    <span className={`${styles.roleBadge} ${styles.roleBadgeAdmin}`}>
                      🛡️ Master Administrator
                    </span>
                    <span className={styles.trustBadge}>
                      ⚡ Full System Permissions
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.profileActions}>
                <button
                  type="button"
                  onClick={handleOpenAdminModal}
                  className="btn btn-outline btn-sm"
                  style={{ borderColor: "#7c3aed", color: "#7c3aed" }}
                >
                  🔑 Security Settings
                </button>
                <Link to="/admin?tab=sales" className="btn btn-primary btn-sm" style={{ background: "#0284c7", borderColor: "#0284c7" }}>
                  📊 Course Sales Hub
                </Link>
                <Link to="/admin?tab=certificates" className="btn btn-primary btn-sm" style={{ background: "#7c3aed", borderColor: "#7c3aed" }}>
                  📜 Certificate Desk
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="btn btn-outline btn-sm"
                  style={{ borderColor: "#ef4444", color: "#ef4444" }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNum} style={{ color: "#059669" }}>
                {formatPrice(salesAnalytics.totalRevenue)}
              </div>
              <div className={styles.statLabel}>Total Course Sales Revenue</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum} style={{ color: "#0284c7" }}>
                {allSales.length}
              </div>
              <div className={styles.statLabel}>Course Enrollments</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum} style={{ color: "#7c3aed" }}>
                {certificates.length}
              </div>
              <div className={styles.statLabel}>Issued Certificates</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum} style={{ color: "#d97706" }}>
                {students.length}
              </div>
              <div className={styles.statLabel}>Registered Learners</div>
            </div>
          </div>

          {/* Registered Students Table */}
          <div className={styles.sectionCard} style={{ marginBottom: "28px" }}>
            <div className={styles.sectionTitle}>
              <span>👥 Registered Students Directory</span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                {students.length} Learners Enrolled
              </span>
            </div>

            {students.length === 0 ? (
              <div className={styles.emptyStateBox}>
                <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>👥</div>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "var(--text-primary, #0f172a)", marginBottom: "4px" }}>
                  No Registered Learners Yet
                </div>
                <p style={{ fontSize: "0.84rem", color: "var(--text-secondary, #64748b)", margin: "0 auto 14px", maxWidth: "420px", lineHeight: "1.5" }}>
                  When learners register via the official registration portal, their enrolled credentials and active accounts will appear here automatically.
                </p>
                <Link to="/register" className="btn btn-outline btn-sm" style={{ borderColor: "#7c3aed", color: "#7c3aed" }}>
                  View Registration Form →
                </Link>
              </div>
            ) : (
              <div className={styles.tableWrap}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Email Address</th>
                      <th>Account Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((st, i) => (
                      <tr key={i}>
                        <td>
                          <strong>{st.name}</strong>
                        </td>
                        <td style={{ wordBreak: "break-all" }}>{st.email}</td>
                        <td>
                          <span className={styles.roleBadge}>🎓 Student</span>
                        </td>
                        <td>
                          <span className={styles.trustBadge}>✓ Active</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Admin Fast Shortcuts */}
          <div className={styles.sectionCard}>
            <h3 className={styles.sectionTitle}>⚡ Quick Admin Operations</h3>
            <div className={styles.quickActionsWrap}>
              <Link to="/admin?tab=sales" className="btn btn-primary btn-sm" style={{ background: "#0284c7", borderColor: "#0284c7" }}>
                📊 Course Sales &amp; Revenue Analytics
              </Link>
              <Link to="/admin?tab=certificates" className="btn btn-primary btn-sm" style={{ background: "#7c3aed", borderColor: "#7c3aed" }}>
                ⚙️ Certificate Generator &amp; Registry Desk
              </Link>
              <Link to="/verify" target="_blank" className="btn btn-outline btn-sm">
                🔍 Public Certificate Verification Portal
              </Link>
              <Link to="/courses" className="btn btn-outline btn-sm">
                📚 View Live Courses
              </Link>
            </div>
          </div>
        </div>

        {/* Change Admin Password Modal */}
        {showAdminModal && (
          <div className={styles.modalOverlay} onClick={() => setShowAdminModal(false)}>
            <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px" }}>
                <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                  🔑 Admin Security Settings
                </h3>
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  style={{ background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#64748b" }}
                >
                  ✕
                </button>
              </div>

              {statusMsg && (
                <div
                  style={{
                    background: statusMsg.error ? "#fef2f2" : "#f0fdf4",
                    color: statusMsg.error ? "#dc2626" : "#166534",
                    border: `1px solid ${statusMsg.error ? "#fecaca" : "#bbf7d0"}`,
                    padding: "10px",
                    borderRadius: "8px",
                    fontSize: "0.85rem",
                    marginBottom: "14px",
                    fontWeight: 700,
                  }}
                >
                  {statusMsg.text}
                </div>
              )}

              <form onSubmit={handleSaveAdminSettings} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                    Administrator Name
                  </label>
                  <input
                    type="text"
                    required
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    className="input"
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                    Administrator Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    className="input"
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                    New Password (leave blank to keep current)
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    className="input"
                    style={{ width: "100%" }}
                  />
                </div>

                {adminPass && (
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Re-type new password"
                      value={adminPassConfirm}
                      onChange={(e) => setAdminPassConfirm(e.target.value)}
                      className="input"
                      style={{ width: "100%" }}
                    />
                  </div>
                )}

                <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, background: "#7c3aed", borderColor: "#7c3aed" }}>
                    Save Credentials
                  </button>
                  <button type="button" onClick={() => setShowAdminModal(false)} className="btn btn-outline">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----------------------------------------------------
  // STUDENT / CUSTOMER PROFILE VIEW
  // ----------------------------------------------------
  // Find certificates matching this student or default certificate
  const myCertificates = certificates.filter(
    (c) =>
      c.candidateName.toLowerCase().includes(user.name.toLowerCase()) ||
      c.candidateEmail?.toLowerCase() === user.email.toLowerCase()
  );

  return (
    <div className={styles.pageContainer}>
      <div className="container" style={{ maxWidth: "1080px" }}>
        {/* Breadcrumbs */}
        <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
          <Link to="/" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>My Profile</span>
        </div>

        {/* Profile Card */}
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.profileIdentity}>
              <div className={styles.avatarCircle}>
                👤
              </div>
              <div className={styles.profileInfo}>
                <h1>{(!user.name || user.name.toLowerCase().includes("demo")) ? "My Profile" : user.name}</h1>
                <p className={styles.profileEmail}>{user.email}</p>
                <div className={styles.badgeRow}>
                  <span className={styles.roleBadge}>🎓 Enrolled Student</span>
                  <span className={styles.trustBadge}>🎯 100% Placement Support Active</span>
                  <span style={{ fontSize: "0.78rem", background: "#f8fafc", color: "#64748b", border: "1px solid #e2e8f0", padding: "4px 10px", borderRadius: "999px", fontWeight: 600 }}>
                    🇮🇳 India &amp; 🇺🇸 USA Batches
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.profileActions}>
              <a
                href={getWhatsAppUrl(`Hi SkilltoSettle! I would like to speak to my academic coordinator regarding my enrolled courses (${user.email}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ borderColor: "#25d366", color: "#16a34a" }}
              >
                💬 WhatsApp Mentor Desk
              </a>
              <button
                type="button"
                onClick={handleOpenStudentModal}
                className="btn btn-outline btn-sm"
                style={{ borderColor: "#0284c7", color: "#0284c7" }}
              >
                🔑 Change Password
              </button>
              <button
                type="button"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="btn btn-outline btn-sm"
                style={{ borderColor: "#ef4444", color: "#ef4444" }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Two Columns: Certificates Left, Active Support Right */}
        <div className={styles.gridTwoCol}>
          {/* Certificates Section */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionTitle}>
              <span>📜 My Course Certificates</span>
              <Link to="/verify" style={{ fontSize: "0.82rem", color: "#0284c7", textDecoration: "none", fontWeight: 700 }}>
                Verify Portal →
              </Link>
            </div>

            {myCertificates.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {myCertificates.map((cert) => (
                  <div
                    key={cert.id}
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "16px",
                      background: "#f8fafc",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontFamily: "monospace", fontWeight: 700, color: "#0284c7", fontSize: "0.85rem" }}>
                        {cert.id}
                      </span>
                      <span className={styles.trustBadge}>✓ Accredited</span>
                    </div>
                    <strong style={{ display: "block", color: "#0f172a", fontSize: "0.95rem", marginBottom: "4px" }}>
                      {cert.courseTitle}
                    </strong>
                    <div style={{ fontSize: "0.8rem", color: "#64748b", marginBottom: "12px" }}>
                      Issued: {cert.issueDate} • Mentor: {cert.mentorName}
                    </div>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <Link to={`/certificate/${encodeURIComponent(cert.id)}`} className="btn btn-primary btn-sm">
                        View &amp; Print Credential
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleCopyCertLink(cert.id)}
                        className="btn btn-outline btn-sm"
                        style={{
                          background: copiedCertId === cert.id ? "#dcfce7" : undefined,
                          color: copiedCertId === cert.id ? "#166534" : undefined,
                          borderColor: copiedCertId === cert.id ? "#86efac" : undefined,
                          fontWeight: copiedCertId === cert.id ? 700 : undefined,
                        }}
                      >
                        {copiedCertId === cert.id ? "✓ Link Copied!" : "📋 Copy Private Link"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "30px 16px", color: "#64748b" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🎓</div>
                <strong style={{ display: "block", color: "#0f172a", marginBottom: "4px" }}>
                  Active Cohort in Progress
                </strong>
                <p style={{ fontSize: "0.85rem", maxWidth: "340px", margin: "0 auto 16px" }}>
                  Your official Course Completion Certificate with QR verification will be issued upon curriculum &amp; capstone completion.
                </p>
                <Link to="/verify" className="btn btn-outline btn-sm">
                  Test Certificate Verification Desk →
                </Link>
              </div>
            )}
          </div>

          {/* 100% Placement & Mentorship Desk */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionTitle}>
              <span>🎯 100% Placement Assistance Desk</span>
              <span className={styles.trustBadge}>Active</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.88rem" }}>
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "14px", borderRadius: "10px" }}>
                <strong style={{ color: "#166534", display: "block", marginBottom: "4px" }}>
                  ✓ Dedicated Career Counselor Assigned
                </strong>
                <p style={{ margin: 0, color: "#14532d", fontSize: "0.82rem" }}>
                  Resume overhaul, LinkedIn optimization, and mock technical interview scheduling are active for India &amp; USA tech drives.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", color: "#334155" }}>
                <div>📞 <strong>India Student Helpline:</strong> {CONTACT_CONFIG.indiaPhone}</div>
                <div>🇺🇸 <strong>USA / WhatsApp Coordinator:</strong> {CONTACT_CONFIG.usaPhone}</div>
                <div>✉️ <strong>Official Student Email:</strong> {CONTACT_CONFIG.infoEmail}</div>
              </div>

              <div style={{ marginTop: "10px", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                <Link to="/courses" className="btn btn-outline w-full" style={{ textAlign: "center" }}>
                  Explore Additional Cohorts &amp; Roadmaps →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Change Password Modal */}
      {showStudentModal && (
        <div className={styles.modalOverlay} onClick={() => setShowStudentModal(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 800, color: "#0f172a" }}>
                🔑 Student Account &amp; Password
              </h3>
              <button
                type="button"
                onClick={() => setShowStudentModal(false)}
                style={{ background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#64748b" }}
              >
                ✕
              </button>
            </div>

            {studentStatusMsg && (
              <div
                style={{
                  background: studentStatusMsg.error ? "#fef2f2" : "#f0fdf4",
                  color: studentStatusMsg.error ? "#dc2626" : "#166534",
                  border: `1px solid ${studentStatusMsg.error ? "#fecaca" : "#bbf7d0"}`,
                  padding: "10px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  marginBottom: "14px",
                  fontWeight: 700,
                }}
              >
                {studentStatusMsg.text}
              </div>
            )}

            <form onSubmit={handleSaveStudentSettings} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                  Your Registered Email
                </label>
                <input
                  type="email"
                  disabled
                  value={user?.email || ""}
                  className="input"
                  style={{ width: "100%", background: "#f8fafc", color: "#64748b", cursor: "not-allowed" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="input"
                  style={{ width: "100%" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                  New Password (leave blank to keep current)
                </label>
                <input
                  type="password"
                  placeholder="Enter new password (min 6 characters)"
                  value={studentPass}
                  onChange={(e) => setStudentPass(e.target.value)}
                  className="input"
                  style={{ width: "100%" }}
                />
              </div>

              {studentPass && (
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, marginBottom: "4px", color: "#0f172a" }}>
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-type new password"
                    value={studentPassConfirm}
                    onChange={(e) => setStudentPassConfirm(e.target.value)}
                    className="input"
                    style={{ width: "100%" }}
                  />
                </div>
              )}

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  Save Changes
                </button>
                <button type="button" onClick={() => setShowStudentModal(false)} className="btn btn-outline">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
