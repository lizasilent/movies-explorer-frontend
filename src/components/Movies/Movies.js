import React from "react";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function Movies(cards) {
  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList cards={cards}/>
      <More />
    </>
  );
}

export default Movies;
