import React from "react";

const poster = (path) => {
  if (!path) return "";
  return path.startsWith("http")
    ? path
    : `https://image.tmdb.org/t/p/w500${path}`;
};

function Pelicula({ movie }) {
  return (
    <div className="movie-card">
      <img src={poster(movie.poster_path)} alt={movie.title} loading="lazy" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-score">⭐ {movie.vote_average}</p>
    </div>
  );
}

export default Pelicula;
