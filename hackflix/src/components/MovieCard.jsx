import React from "react";
import StarRating from "./StarRating";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.poster_path}
        alt={movie.title}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/200x300?text=No+Image")
        }
      />
      <h3>{movie.title}</h3>
      <StarRating rating={movie.vote_average} />
    </div>
  );
}

export default MovieCard;
