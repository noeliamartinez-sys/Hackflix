import React from "react";

function StarRating({ rating }) {
  const fullStars = Math.round(rating / 2);
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>{i < fullStars ? "★" : "☆"}</span>
  ));
  return <div className="stars">{stars}</div>;
}

export default StarRating;
