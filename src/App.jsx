import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import banner from "./assets/banner.jpg";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${banner})`,
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-left">Hackflix</div>
          <div className="nav-right">
            <span>Inicio</span>
            <span>Favoritos</span>
          </div>
        </div>
      </nav>

      <header className="hero hero--center" style={heroStyle}>
        <h1>¡Tus películas favoritas!</h1>
        <p>
          Descubrí nuevas películas, reviví tus favoritas y compartí tu amor por
          el cine. 🍿{" "}
        </p>
      </header>

      <div className="filtro">
        <span>Filtrar por rating:</span>
        <Rating
          onClick={handleRating}
          initialValue={rating}
          size={30}
          transition
          allowFraction
          fillColor="#f1a545"
          emptyColor="#ccc"
        />
        <span>& Más</span>
      </div>
    </div>
  );
}

export default App;
