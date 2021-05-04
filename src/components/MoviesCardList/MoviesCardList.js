import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(cards) {
  return (
    <div className="grid">
      <ul className="grid__template">
        <MoviesCard cards={cards} />
      </ul>
    </div>
  );
}

export default MoviesCardList;
