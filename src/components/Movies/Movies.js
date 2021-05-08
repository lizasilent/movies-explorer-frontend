import React from "react";
import { useLocation } from "react-router-dom";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({isLogin}) {

  const { pathname } = useLocation();

  return (
    <>
      < Header isLogin={isLogin} />
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <More />
    <Footer />
    </>
  );
}

export default Movies;
