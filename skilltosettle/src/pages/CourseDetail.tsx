import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseBySlug } from "@/data/courses";
import { getInstructorByName } from "@/data/instructors";
import { useCurrency } from "@/context/CurrencyContext";
import { getWhatsAppUrl } from "@/utils/constants";
import StarRating from "@/components/ui/StarRating";
import StickyEnrollPanel from "@/components/courses/StickyEnrollPanel";
import EnrollmentCheckoutModal from "@/components/checkout/EnrollmentCheckoutModal";
import { useSEO } from "@/utils/useSEO";
import styles from "./CourseDetail.module.css";

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;
  const { formatPrice } = useCurrency();
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  useSEO({
    title: course ? course.title : "Course Not Found",
    description: course ? course.subtitle : "Explore live cohort tech courses at SkilltoSettle.",
    canonical: course ? `https://skilltosettle.com/courses/${course.slug}` : undefined,
    ogImage: course?.image,
  });

  if (!course) {
    return (
      <div className={styles.notFoundPage}>
        <div className="container text-center">
          <h1 className="text-h1 mb-md">Course Not Found</h1>
          <p className="text-body-lg mb-lg">We couldn&apos;t find the course you were looking for.</p>
          <Link to="/courses" className="btn btn-primary">
            Browse All Courses →
          </Link>
        </div>
      </div>
    );
  }

  const instructorObj = getInstructorByName(course.instructor);

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  const courseSchema = course
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.subtitle,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "SkilltoSettle",
          "sameAs": "https://skilltosettle.com"
        },
        "instructor": {
          "@type": "Person",
          "name": course.instructor,
          "jobTitle": course.instructorTitle
        },
        "offers": {
          "@type": "Offer",
          "category": "Paid",
          "price": course.price,
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": course.rating,
          "bestRating": "5",
          "ratingCount": course.reviewCount
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "courseWorkload": course.duration,
          "startDate": course.nextBatch
        }
      }
    : null;

  return (
    <div className={styles.page}>
      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
      {/* 01: Course Hero (Above Fold) */}
      <section className={styles.heroSection}>
        <div className="container">
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link to="/courses">Courses</Link>
            <span className={styles.crumbDivider}>/</span>
            <Link to={`/courses?category=${course.categorySlug}`}>{course.category}</Link>
            <span className={styles.crumbDivider}>/</span>
            <span className={styles.currentCrumb}>{course.title}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <div className="section-eyebrow teal">
                <span>LIVE COHORT MASTERCLASS</span>
              </div>

              <h1 className={styles.courseTitle}>Become Job-Ready in {course.title}</h1>

              {/* Hero Certificate Trust Badge */}
              <div className={styles.heroCertBadgeRow}>
                <span className={styles.heroCertBadge}>
                  🎯 100% PLACEMENT ASSISTANCE
                </span>
                <span style={{ fontSize: "0.76rem", fontWeight: 800, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "3px 10px", borderRadius: "999px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
                  🎓 COURSE COMPLETION CERTIFICATE INCLUDED
                </span>
                <span className={styles.heroFeaturesRow}>
                  India &amp; USA Hiring Network · Live Training · Capstones · Accredited Course Completion Certificate
                </span>
              </div>

              {/* Visual Course Hero Banner */}
              <div className={styles.heroMediaCard}>
                <img
                  src={course.image}
                  alt={course.title}
                  className={styles.heroMediaImg}
                />
                <div className={styles.heroMediaOverlay}>
                  <span className={styles.heroMediaBadge}>
                    🔴 Interactive Live Cohort
                  </span>
                  <span className={styles.heroMediaTitle}>
                    Lead Mentor: {course.instructor} ({course.instructorTitle})
                  </span>
                </div>
              </div>

              <p className={styles.courseSubtitle}>{course.subtitle}</p>

              {/* Trust & Meta Chips */}
              <div className={styles.metaChipsRow}>
                <div className={styles.ratingBox}>
                  <StarRating rating={course.rating} count={course.reviewCount} />
                </div>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaPill}>{course.learners.toLocaleString()}+ Enrolled</span>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaPill}>{course.duration}</span>
                <span className={styles.metaDivider}>•</span>
                <span className={styles.metaPill}>India &amp; USA Cohorts</span>
              </div>

              {/* Value Stack Quick Bullet Points */}
              <div className={styles.heroBullets}>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>100% Live Instructor-Led Classes with direct doubt solving</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>Deploy production-grade capstone projects on cloud &amp; GitHub</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>100% Placement Assistance</strong> across hiring partners in India &amp; USA</span>
                </div>
                <div className={styles.bulletItem}>
                  <span className={styles.bulletCheck}>✓</span>
                  <span>1-on-1 resume review &amp; realistic technical mock interviews</span>
                </div>
              </div>
            </div>

            {/* Sticky Panel in Desktop Hero slot */}
            <div className={styles.heroRight}>
              <StickyEnrollPanel course={course} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content Breakdown */}
      <section className="section-sm">
        <div className="container">
          <div className={styles.contentLayout}>
            {/* Left Main Column */}
            <div className={styles.mainCol}>
              {/* SECTION: Who is this for? */}
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>Who Is This Program For?</h2>
                <div className={styles.targetAudienceGrid}>
                  <div className={styles.audienceCard}>
                    <span className={styles.audienceIcon}>🚀</span>
                    <h4>Career Starters</h4>
                    <p>Students and freshers seeking their first tech job with structured hands-on project proof.</p>
                  </div>
                  <div className={styles.audienceCard}>
                    <span className={styles.audienceIcon}>🔄</span>
                    <h4>Career Switchers</h4>
                    <p>Professionals in manual testing, support, or non-tech roles wanting to transition into {course.title}.</p>
                  </div>
                  <div className={styles.audienceCard}>
                    <span className={styles.audienceIcon}>📈</span>
                    <h4>Working Professionals</h4>
                    <p>Engineers and analysts looking to master modern workflows and command top-tier promotions.</p>
                  </div>
                </div>
              </div>

              {/* SECTION: What you'll be able to do (Outcomes) */}
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>What You&apos;ll Be Able to Do</h2>
                <p className={styles.blockSub}>
                  By the end of this program, you will have practical mastery to:
                </p>
                <div className={styles.outcomesList}>
                  {course.outcomes.map((out, i) => (
                    <div key={i} className={styles.outcomeItem}>
                      <span className={styles.outcomeCheck}>✓</span>
                      <span className={styles.outcomeText}>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: Skills & Tools You'll Master */}
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>Skills & Tools You&apos;ll Master</h2>
                <div className={styles.tagsCloud}>
                  {course.tags.map((tag, i) => (
                    <span key={i} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SECTION: Production Projects */}
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>Production Projects You Will Build</h2>
                <p className={styles.blockSub}>
                  Real business scenarios with live code repositories, architecture diagrams, and mentor reviews.
                </p>
                <div className={styles.projectsList}>
                  {course.projects.map((proj, i) => (
                    <div key={i} className={styles.projectCard}>
                      <div className={styles.projIndex}>PROJECT 0{i + 1}</div>
                      <h3 className={styles.projTitle}>{proj}</h3>
                      <p className={styles.projDesc}>
                        Architected from scratch, tested with realistic datasets/loads, and documented for your portfolio and interview discussions.
                      </p>
                      <div className={styles.projMeta}>
                        <span className={styles.projDeliverable}>✓ GitHub Repo Ready</span>
                        <span className={styles.projDeliverable}>✓ Architecture Diagram</span>
                        <span className={styles.projDeliverable}>✓ Live Mentor Code Review</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: Curriculum Roadmap (Module Accordion) */}
              <div className={styles.contentBlock}>
                <div className={styles.curriculumHeader}>
                  <div>
                    <h2 className={styles.blockTitle}>Curriculum Roadmap</h2>
                    <p className={styles.blockSub}>
                      {course.curriculum.length} Modules · Structured progressive learning journey
                    </p>
                  </div>
                </div>

                <div className={styles.modulesList}>
                  {course.curriculum.map((mod, idx) => {
                    const isOpen = openModule === idx;
                    return (
                      <div key={idx} className={`${styles.moduleItem} ${isOpen ? styles.moduleOpen : ""}`}>
                        <button
                          className={styles.moduleToggle}
                          onClick={() => toggleModule(idx)}
                        >
                          <div className={styles.moduleMeta}>
                            <span className={styles.moduleNum}>Module 0{idx + 1}</span>
                            <span className={styles.moduleName}>{mod.module}</span>
                          </div>
                          <span className={styles.moduleIcon}>{isOpen ? "−" : "+"}</span>
                        </button>
                        {isOpen && (
                          <div className={styles.moduleBody}>
                            <div className={styles.topicsGrid}>
                              {mod.topics.map((t, ti) => (
                                <div key={ti} className={styles.topicItem}>
                                  <span className={styles.topicDot}>•</span>
                                  <span>{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: Instructor Authority with Real Photo */}
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>Meet Your Lead Mentor</h2>
                <div className={styles.instCard}>
                  {instructorObj?.avatar ? (
                    <img
                      src={instructorObj.avatar}
                      alt={course.instructor}
                      className={styles.instAvatar}
                    />
                  ) : (
                    <div className={styles.instAvatarFallback}>{course.instructor.charAt(0)}</div>
                  )}
                  <div className={styles.instDetails}>
                    <h3 className={styles.instName}>{course.instructor}</h3>
                    <p className={styles.instRole}>{course.instructorTitle}</p>
                    <p className={styles.instBio}>
                      Senior practitioner with extensive industry experience building and deploying high-scale systems. Dedicated to 1-on-1 student guidance and interview preparation.
                    </p>
                    <div className={styles.instStats}>
                      <span>1,500+ Students Mentored</span>
                      <span>•</span>
                      <span>4.8/5 Instructor Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION: Career Support System */}
              <div className={styles.contentBlock}>
                <h2 className={styles.blockTitle}>100% Placement Assistance (India &amp; USA)</h2>
                <div className={styles.careerGrid}>
                  <div className={styles.careerStep}>
                    <span className={styles.careerIcon}>📄</span>
                    <h4>1. Resume Transformation</h4>
                    <p>ATS-optimized positioning tailored for top recruiters across India &amp; USA highlighting your {course.title} capstones.</p>
                  </div>
                  <div className={styles.careerStep}>
                    <span className={styles.careerIcon}>💼</span>
                    <h4>2. LinkedIn &amp; Global Profile</h4>
                    <p>Profile overhaul to attract recruiters and inbound technical screening calls in India &amp; USA.</p>
                  </div>
                  <div className={styles.careerStep}>
                    <span className={styles.careerIcon}>🎯</span>
                    <h4>3. Mock Technical Interviews</h4>
                    <p>Live 1-on-1 simulation sessions with feedback on system design and problem solving.</p>
                  </div>
                  <div className={styles.careerStep}>
                    <span className={styles.careerIcon}>🤝</span>
                    <h4>4. 100% Placement Assistance</h4>
                    <p>Direct placement referrals across our hiring partner and alumni network in India &amp; USA.</p>
                  </div>
                </div>
              </div>

              {/* SECTION: Full Value Stack & Guarantee */}
              <div className={styles.valueStackCard}>
                <h2 className={styles.valueTitle}>Everything Included in This Program</h2>
                <div className={styles.valueGrid}>
                  {course.inclusions.map((inc, i) => (
                    <div key={i} className={styles.valueItem}>
                      <span className={styles.valueCheck}>✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.valuePriceRow}>
                  <div>
                    <span className={styles.valuePriceLabel}>Total Program Investment:</span>
                    <div className={styles.valuePrices}>
                      <span className={styles.valueCurrentPrice}>{formatPrice(course.price)}</span>
                      <span className={styles.valueStrikePrice}>{formatPrice(course.originalPrice)}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button
                      onClick={() => setShowCheckoutModal(true)}
                      className="btn btn-lg"
                      style={{ background: "#ffffff", color: "#009bb9", fontWeight: 800 }}
                    >
                      Reserve Seat →
                    </button>
                    <a
                      href={getWhatsAppUrl(`Hi, I want to reserve a seat in the ${course.title} cohort.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-teal btn-lg"
                    >
                      WhatsApp Advisor →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.sideCol}>
              <div className={styles.sideCard}>
                <h3 className={styles.sideCardTitle}>Need Help Deciding?</h3>
                <p className={styles.sideCardDesc}>
                  Our senior career counselors are available on WhatsApp to answer questions about syllabus depth, batch timings, and hiring outcomes.
                </p>
                <a
                  href={getWhatsAppUrl(`Hi, I have questions about the ${course.title} curriculum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full btn-sm"
                >
                  Talk to Counselor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Razorpay Checkout Modal */}
      <EnrollmentCheckoutModal
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
        title={course.title}
        category={course.category}
        price={course.price}
        originalPrice={course.originalPrice}
        duration={course.duration}
        instructor={course.instructor}
        batch={course.nextBatch}
        slug={course.slug}
      />
    </div>
  );
}
