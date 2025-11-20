import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

export default function MoviesGrid({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            style={{ cursor: "pointer" }}
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </>
  );
}
