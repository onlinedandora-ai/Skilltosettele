import React from "react";

interface StarRatingProps {
  rating: number;
  count?: number;
  showText?: boolean;
}

export default function StarRating({ rating, count, showText = true }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
      <div style={{ display: "inline-flex", gap: "2px", color: "#f59e0b" }}>
        {[...Array(fullStars)].map((_, i) => (
          <span key={`f-${i}`}>★</span>
        ))}
        {hasHalf && <span>★</span>}
        {[...Array(5 - fullStars - (hasHalf ? 1 : 0))].map((_, i) => (
          <span key={`e-${i}`} style={{ opacity: 0.3 }}>★</span>
        ))}
      </div>
      {showText && (
        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
          {rating.toFixed(1)}
          {count && (
            <span style={{ fontWeight: 400, color: "var(--text-muted)", marginLeft: "4px" }}>
              ({count.toLocaleString()})
            </span>
          )}
        </span>
      )}
    </div>
  );
}
