import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home */}
        <Route path="/pelicula/:id" element={<MovieDetails />} />{" "}
        {/* Detalle */}
        <Route
          path="*"
          element={<h2>Error 404: Página no encontrada</h2>}
        />{" "}
        {/* 404 */}
      </Routes>
    </Router>
  );
}

export default App;
