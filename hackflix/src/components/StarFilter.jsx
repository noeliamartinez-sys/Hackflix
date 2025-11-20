import React from "react";

const StarFilter = ({ selectedStars, setSelectedStars }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>Filtrar por rating: </label>
      <select
        value={selectedStars}
        onChange={(e) => setSelectedStars(Number(e.target.value))}
      >
        <option value={0}>Todas</option>
        <option value={1}>1 estrella</option>
        <option value={2}>2 estrellas</option>
        <option value={3}>3 estrellas</option>
        <option value={4}>4 estrellas</option>
        <option value={5}>5 estrellas</option>
      </select>
    </div>
  );
};

export default StarFilter;
