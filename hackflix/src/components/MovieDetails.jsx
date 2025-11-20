import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // obtenemos el id de la URL
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedMovie = data.find((m) => m.id === Number(id));
        setMovie(selectedMovie);
      });
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/")}>Volver</button>
      <h2>{movie.title}</h2>
      <img
        src={movie.poster_path}
        alt={movie.title}
        style={{ width: "300px" }}
      />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
