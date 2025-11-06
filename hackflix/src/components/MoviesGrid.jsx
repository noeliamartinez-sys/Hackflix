import React from "react";
import MovieCard from "./MovieCard";

function MoviesGrid({ movies }) {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesGrid;
