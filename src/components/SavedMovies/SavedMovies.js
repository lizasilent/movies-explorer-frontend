import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <More />
      <Footer />
    </>
  );
}

export default SavedMovies;
