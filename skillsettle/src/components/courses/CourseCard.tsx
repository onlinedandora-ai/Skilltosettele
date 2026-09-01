import React from "react";
import { Link } from "react-router-dom";
import { Course } from "@/data/courses";
import StarRating from "@/components/ui/StarRating";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const discountPercent = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <div className={styles.card}>
      {/* Top Banner with Badge & Category */}
      <div className={styles.topRow}>
        <span className={styles.categoryPill}>{course.category}</span>
        {course.badge && (
          <span className={`${styles.badge} ${course.badge === "Bestseller" ? styles.bestseller : styles.topRated}`}>
            {course.badge === "Bestseller" ? "🔥 " : "⭐ "}
            {course.badge}
          </span>
        )}
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
            <span>Live Interactive</span>
          </span>
          <span className={styles.metaItem}>
            <span>⏱ {course.duration}</span>
          </span>
          <span className={styles.metaItem}>
            <span>🛠 Capstone Projects</span>
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
              ⚡ {course.seatsLeft} seats left
            </span>
          )}
        </div>

        {/* Instructor */}
        <div className={styles.instructorBox}>
          <div className={styles.instAvatar}>{course.instructor.charAt(0)}</div>
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
            <span className={styles.price}>₹{course.price.toLocaleString()}</span>
            <span className={styles.originalPrice}>₹{course.originalPrice.toLocaleString()}</span>
          </div>
          <span className={styles.discountBadge}>{discountPercent}% OFF Early Bird</span>
        </div>

        <Link to={`/courses/${course.slug}`} className="btn btn-primary btn-sm w-full">
          View Curriculum →
        </Link>
      </div>
    </div>
  );
}
