import React from "react";
import "../MoviesCardList/MoviesCardList.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <More />
    </>
  );
}

export default SavedMovies;
