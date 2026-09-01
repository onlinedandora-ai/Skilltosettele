import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        {/* Contact Strip Box */}
        <div className={styles.callStrip}>
          <div className={styles.callLeft}>
            <div className={styles.headsetIcon}>🎧</div>
            <div>
              <span className={styles.stripLabel}>CALL US 24/7 ADMISSIONS DESK</span>
              <div className={styles.phoneNumbers}>
                <a href="tel:+917842832727" className={styles.phoneLink}>🇮🇳 +91 78428 32727</a>
                <span className={styles.phoneDivider}>|</span>
                <a href="tel:+13465561234" className={styles.phoneLink}>🇺🇸 +1 (346) 556-1234</a>
              </div>
            </div>
          </div>

          <div className={styles.callRight}>
            <div className={styles.addressBox}>
              <span className={styles.stripLabel}>USA GLOBAL HQ</span>
              <span className={styles.addressText}>6464 Savoy Dr, Suite 777, Houston, TX 77036</span>
            </div>
            <div className={styles.emailBox}>
              <span className={styles.stripLabel}>DIRECT INQUIRIES</span>
              <a href="mailto:info@skillsettle.com" className={styles.emailLink}>info@skillsettle.com</a>
            </div>
          </div>
        </div>

        <div className={styles.topSection}>
          {/* Brand Info & Mission */}
          <div className={styles.brandCol}>
            <Logo variant="dark" size="md" />
            <p className={styles.description}>
              Since 2020, Skillsettle has empowered thousands of professionals across India, USA, and globally to master in-demand Cloud, DevOps, AI, Data Science, and Business Analysis technologies with 100% placement mentorship.
            </p>

            {/* Newsletter */}
            <div className={styles.newsletterBox}>
              <span className={styles.newsletterLabel}>Never Miss a New Cohort or Scholarship</span>
              {subscribed ? (
                <div className={styles.subSuccess}>✓ Subscribed for weekly tech digests!</div>
              ) : (
                <form onSubmit={handleNewsletter} className={styles.newsForm}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className={styles.newsInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className={styles.newsBtn}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.4 9.74V9.95H5.06v8.55h2.8z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Explore Programs</h4>
            <ul className={styles.linkList}>
              <li><Link to="/courses" className={styles.link}>All 100+ Courses</Link></li>
              <li><Link to="/career-paths" className={styles.link}>Career Paths Roadmap</Link></li>
              <li><Link to="/live-classes" className={styles.link}>Live Cohort Batches</Link></li>
              <li><Link to="/career-finder" className={styles.link}>2-Min Career Assessment</Link></li>
              <li><Link to="/success-stories" className={styles.link}>Alumni Success Stories</Link></li>
            </ul>
          </div>

          {/* Popular Programs Column */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Popular Specializations</h4>
            <ul className={styles.linkList}>
              <li><Link to="/courses?category=cloud-devops" className={styles.link}>DevOps with AI Engineering</Link></li>
              <li><Link to="/courses?category=ai-data" className={styles.link}>Data Analytics & SQL Mastery</Link></li>
              <li><Link to="/courses?category=ai-data" className={styles.link}>Machine Learning & GenAI</Link></li>
              <li><Link to="/courses?category=ai-data" className={styles.link}>Microsoft Power BI & DAX</Link></li>
              <li><Link to="/courses?category=business" className={styles.link}>Business Analyst (BA) Program</Link></li>
              <li><Link to="/courses?category=global" className={styles.link}>IELTS 7.5+ Band Mastery</Link></li>
            </ul>
          </div>

          {/* Support & Corporate */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Enterprise & Support</h4>
            <ul className={styles.linkList}>
              <li><Link to="/corporate" className={styles.link}>Corporate Team Training</Link></li>
              <li><Link to="/instructors" className={styles.link}>Meet Expert Mentors</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact Admissions Desk</Link></li>
              <li><a href="https://wa.me/917842832727" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp Advisor (24/7)</a></li>
              <li><Link to="/courses" className={styles.link}>Certificate Verification</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Payment & Legal */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              © {currentYear} Skillsettle (Skill to Settle). All rights reserved. • Houston, TX & Hyderabad, India.
            </p>
          </div>

          <div className={styles.paymentMethods}>
            <span className={styles.payLabel}>SECURE PAYMENTS:</span>
            <span className={styles.payPill}>💳 Razorpay 256-bit</span>
            <span className={styles.payPill}>UPI / GPay / PhonePe</span>
            <span className={styles.payPill}>0% No-Cost EMI</span>
            <span className={styles.payPill}>Stripe Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
