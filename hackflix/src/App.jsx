import React, { useState, useEffect } from "react";
import MoviesGrid from "./components/MoviesGrid";
import RatingFilter from "./components/RatingFilter";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((error) => console.error("Error al cargar las películas:", error));
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) => movie.vote_average >= minRating);
    setFilteredMovies(filtered);
  }, [minRating, movies]);

  return (
    <div className="app">
      <h1>🎬 Hackflix — Parte 1</h1>
      <RatingFilter minRating={minRating} setMinRating={setMinRating} />
      <MoviesGrid movies={filteredMovies} />
    </div>
  );
}

export default App;
