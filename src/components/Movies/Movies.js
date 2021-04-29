import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies() {
  return(
    <div>
  <SearchForm/>
  <Preloader/>
  <MoviesCardList/>
  </div>
  )
}

export default Movies;
