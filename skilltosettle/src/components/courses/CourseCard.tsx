import React from "react";
import { Link } from "react-router-dom";
import { Course } from "@/data/courses";
import { getInstructorByName } from "@/data/instructors";
import { useCurrency } from "@/context/CurrencyContext";
import { getWhatsAppUrl } from "@/utils/constants";
import StarRating from "@/components/ui/StarRating";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { formatPrice } = useCurrency();
  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );
  const instructor = getInstructorByName(course.instructor);

  return (
    <div className={styles.card}>
      {/* Course Image Thumbnail Header with Overlaid Badges */}
      <div className={styles.imageHeader}>
        <Link to={`/courses/${course.slug}`} className={styles.imageLink} tabIndex={-1}>
          <img
            src={course.image}
            alt={course.title}
            className={styles.courseImg}
            loading="lazy"
          />
          <div className={styles.imageGradientOverlay}></div>
        </Link>

        {/* Top Badges Row */}
        <div className={styles.imageTopBadges}>
          <span className={styles.categoryPill}>{course.category}</span>
          {course.badge && (
            <span
              className={`${styles.badge} ${
                course.badge.includes("Bestseller") ? styles.bestseller : styles.topRated
              }`}
            >
              {course.badge}
            </span>
          )}
        </div>

        {/* Bottom Image Overlay Badge: Certificate */}
        <div className={styles.imageBottomBadges}>
          <span className={styles.certPill}>🎓 Course Completion Certificate Included</span>
        </div>
      </div>

      {/* Main Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>
        <p className={styles.subtitle}>{course.subtitle}</p>

        {/* Rating & Reviews */}
        <div className={styles.ratingRow}>
          <StarRating rating={course.rating} count={course.reviewCount} />
        </div>

        {/* Meta Stats Row */}
        <div className={styles.metaPills}>
          <span className={styles.metaItem}>
            <span className={styles.livePulse}></span>
            <span>Live Cohort</span>
          </span>
          <span className={styles.metaItem}>
            <span>{course.duration}</span>
          </span>
          <span className={styles.metaItem}>
            <span>Capstone Labs</span>
          </span>
        </div>

        {/* Feature Label */}
        <div className={styles.featureLabelRow}>
          <span className={styles.featureLabelText}>
            🎯 100% Placement Assistance · India &amp; USA
          </span>
        </div>

        {/* Tech Stack Tags */}
        <div className={styles.tags}>
          {course.tags.slice(0, 4).map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
          {course.tags.length > 4 && (
            <span className={styles.moreTag}>+{course.tags.length - 4}</span>
          )}
        </div>

        {/* Next Batch & Urgency */}
        <div className={styles.batchContainer}>
          <div className={styles.batchLeft}>
            <span className={styles.batchLabel}>Next Cohort:</span>
            <span className={styles.batchDate}>{course.nextBatch}</span>
          </div>
          {course.seatsLeft <= 10 && (
            <span className={styles.seatsPill}>
              {course.seatsLeft} seats left
            </span>
          )}
        </div>

        {/* Instructor with Real Photo */}
        <div className={styles.instructorBox}>
          {instructor?.avatar ? (
            <img
              src={instructor.avatar}
              alt={course.instructor}
              className={styles.instImg}
            />
          ) : (
            <div className={styles.instAvatar}>{course.instructor.charAt(0)}</div>
          )}
          <div className={styles.instDetails}>
            <span className={styles.instName}>{course.instructor}</span>
            <span className={styles.instTitle}>{course.instructorTitle}</span>
          </div>
        </div>
      </div>

      {/* Footer Pricing & CTA */}
      <div className={styles.footer}>
        <div className={styles.priceContainer}>
          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(course.price)}</span>
            <span className={styles.originalPrice}>{formatPrice(course.originalPrice)}</span>
          </div>
          <span className={styles.discountBadge}>{discountPercent}% OFF</span>
        </div>

        <div className={styles.cardActions}>
          <a
            href={getWhatsAppUrl(`Hi! I would like to talk to an admissions counselor regarding the ${course.title} course (100% placement assistance in India & USA).`)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.counselorBtn}
            title={`Chat with counselor about ${course.title}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            <span>Counselor</span>
          </a>
          <Link
            to={`/courses/${course.slug}`}
            className={styles.detailsBtn}
            title={`View full details and syllabus for ${course.title}`}
          >
            <span>Syllabus →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
