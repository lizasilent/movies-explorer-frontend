import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";
import More from "../More/More";

function Movies() {
  return (
    <div>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <SavedMovies />
      <More />
    </div>
  );
}

export default Movies;
