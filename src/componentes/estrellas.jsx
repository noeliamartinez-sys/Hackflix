import React from "react";
import { Rating } from "react-simple-star-rating";

function Estrellas({ valor, alCambiar }) {
  return (
    <div>
      <Rating
        onClick={alCambiar}
        ratingValue={valor * 20}
        size={25}
        allowHover={false}
      />
      <span> & Más</span>
    </div>
  );
}

export default Estrellas;
