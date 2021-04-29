import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {
  return (
    <div className="grid">
      <ul className="grid__template">
        <MoviesCard />
      </ul>
    </div>
  );
}

export default SavedMovies;
