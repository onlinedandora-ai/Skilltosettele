import React from "react";
import { CertificateRecord } from "@/data/certificates";
import CertificateQR from "@/components/ui/CertificateQR";
import styles from "./CertificateDocument.module.css";

interface CertificateDocumentProps {
  cert: CertificateRecord;
  verificationUrl?: string;
  className?: string;
  orientation?: "landscape" | "portrait";
}

export default function CertificateDocument({
  cert,
  verificationUrl,
  className,
  orientation = "landscape",
}: CertificateDocumentProps) {
  // Always use official live URL for QR code and verification link
  const defaultVerifyUrl = `https://skilltosettle.com/certificate/${encodeURIComponent(cert.id)}`;
  const finalVerifyUrl = verificationUrl || defaultVerifyUrl;

  const isPortrait = orientation === "portrait";

  return (
    <div
      className={`${styles.certWrapper} ${isPortrait ? styles.portraitWrapper : ""} ${className || ""}`}
    >
      <div
        className={`${styles.certContainer} ${isPortrait ? styles.portraitContainer : ""}`}
        id={`cert-${cert.id}`}
      >
        {/* Double Guilloche Gold Foil Border */}
        <div className={styles.outerFrame}></div>
        <div className={styles.innerFrame}></div>

        {/* Ornate Corner Accents */}
        <div className={styles.cornerTL}></div>
        <div className={styles.cornerTR}></div>
        <div className={styles.cornerBL}></div>
        <div className={styles.cornerBR}></div>

        {/* Subtle Gold Monogram Watermark Security Seal */}
        <div className={styles.watermark}>
          <div className={styles.watermarkMonogram}>STS</div>
          <div className={styles.watermarkText}>SKILLTOSETTLE</div>
        </div>

        {/* Certificate Header */}
        <div className={styles.certHeader}>
          <div className={styles.headerBranding}>
            <div className={styles.stsLogoWrap}>
              <img src="/sts-logo.png" alt="SkilltoSettle Crest" className={styles.stsLogoImg} />
            </div>
            <div className={styles.brandingText}>
              <h2 className={styles.academyTitle}>SKILLTOSETTLE GLOBAL ACADEMY</h2>
              <span className={styles.academySub}>
                ACCREDITED CAREER &amp; PLACEMENT NETWORK · HOUSTON, TX, USA &amp; INDIA
              </span>
            </div>
          </div>
          <div className={styles.excellenceTitle}>
            CERTIFICATE OF PROFESSIONAL EXCELLENCE
          </div>
        </div>

        {/* Certificate Body */}
        <div className={styles.certBody}>
          <div className={styles.certifyText}>THIS IS TO PROUDLY CERTIFY THAT</div>
          <div className={styles.recipientName}>{cert.candidateName}</div>
          <p className={styles.statementText}>
            has demonstrated outstanding technical proficiency, completed real-world production capstone projects, and fulfilled all graduation requirements for
          </p>
          <div className={styles.courseTitle}>{cert.courseTitle}</div>
          {cert.specialization && (
            <div className={styles.specializationBadge}>
              <span>Specialization:</span>
              <strong>{cert.specialization}</strong>
            </div>
          )}
        </div>

        {/* Signatures & 3D Gold Seal */}
        <div className={styles.signaturesRow}>
          {/* Left: Lead Mentor */}
          <div className={styles.signatureCol}>
            <div className={styles.scriptSig}>{cert.mentorSignature}</div>
            <div className={styles.sigLine}></div>
            <div className={styles.sigName}>{cert.mentorName}</div>
            <div className={styles.sigTitle}>LEAD TECHNICAL MENTOR</div>
          </div>

          {/* Center: Gold Medallion Seal */}
          <div className={styles.sealWrapper}>
            <div className={styles.goldSealMedallion}>
              <div className={styles.sealInner}>
                <img src="/sts-logo.png" alt="STS Seal" className={styles.sealStsLogo} />
                <span className={styles.sealVerifiedText}>VERIFIED</span>
                <span className={styles.sealSubText}>USA · IND</span>
              </div>
            </div>
            <div className={styles.ribbonsGroup}>
              <div className={styles.ribbonLeft}></div>
              <div className={styles.ribbonRight}></div>
            </div>
          </div>

          {/* Right: Program Director */}
          <div className={styles.signatureCol}>
            <div className={styles.scriptSig}>Dr. Rajesh K.</div>
            <div className={styles.sigLine}></div>
            <div className={styles.sigName}>{cert.directorName}</div>
            <div className={styles.sigTitle}>{cert.directorTitle}</div>
          </div>
        </div>

        {/* Bottom Verification & Metadata Bar */}
        <div className={styles.certMetaBar}>
          <div className={styles.credentialTag}>
            <span>CREDENTIAL ID:</span>
            <strong>{cert.id}</strong>
          </div>

          <div className={styles.issuedDate}>
            Issued: {cert.issueDate}
          </div>

          <div className={styles.qrVerificationBox}>
            <CertificateQR value={finalVerifyUrl} size={38} />
            <span className={styles.qrScanText}>Scan to Verify Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
