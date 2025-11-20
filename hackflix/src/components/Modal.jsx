import React from "react";
import "./Modal.css";

export default function Modal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-body">
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="modal-poster"
          />

          <div className="modal-info">
            <h2>{movie.title}</h2>

            {movie.release_date && (
              <p>
                <strong>Fecha:</strong> {movie.release_date}
              </p>
            )}

            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>

            <hr />

            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
