import React from "react";
import StarRating from "./StarRating";

function RatingFilter({ minRating, setMinRating }) {
  const handleClick = (rating) => {
    setMinRating(rating * 2);
  };

  return (
    <div className="filter">
      <p>Filtrar por calificación:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={minRating / 2 >= star ? "active" : ""}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingFilter;
