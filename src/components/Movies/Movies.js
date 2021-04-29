import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SavedMovies from "../SavedMovies/SavedMovies";
import More from "../More/More";

function Movies() {
  return (
    <>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <SavedMovies />
      <More />
    </>
  );
}

export default Movies;
