import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate(); // nos permite ir a otra página

  const handleClick = () => {
    navigate(`/pelicula/${movie.id}`); // al hacer click, vamos a la página de detalle
  };

  const starCount = Math.round(movie.vote_average / 2); // convertimos rating (1-10) a estrellas (1-5)

  return (
    <div
      className="movie-card"
      onClick={handleClick}
      style={{ cursor: "pointer", textAlign: "center" }}
    >
      <img
        src={movie.poster_path}
        alt={movie.title}
        style={{ width: "200px" }}
      />
      <h3>{movie.title}</h3>
      <p>{"⭐".repeat(starCount)}</p> {/* muestra las estrellas */}
    </div>
  );
};

export default MovieCard;
