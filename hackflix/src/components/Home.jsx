import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import StarFilter from "../components/StarFilter";

const Home = () => {
  const [movies, setMovies] = useState([]); // lista completa de películas
  const [selectedStars, setSelectedStars] = useState(0); // filtro de estrellas

  // Cargar películas desde movies.json
  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  // Aplicar filtro
  const filteredMovies = movies.filter((movie) => {
    if (selectedStars === 0) return true; // si no hay filtro, mostrar todas
    return movie.vote_average >= selectedStars * 2; // 1 estrella = 2 puntos, 5 estrellas = 10 puntos
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hackflix</h1>
      <StarFilter
        selectedStars={selectedStars}
        setSelectedStars={setSelectedStars}
      />

      {filteredMovies.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>Lo sentimos, no se encontraron películas con el rating solicitado</p>
      )}
    </div>
  );
};

export default Home;
