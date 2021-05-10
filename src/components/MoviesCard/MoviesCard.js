import React from "react";
import "./MoviesCard.css";
import moviesIconCard from "../../images/save_icon.png";
import moviesSavedCardIcon from "../../images/saved_icon.png";
import deleteCardIcon from "../../images/delete_icon.png";

function MoviesCard({ savedMovies, movie, onBookmarkClick, isSavedMovie }) {
  const { nameRU, duration, trailer, image } = movie;

  let isSaved = isSavedMovie(movie);

  function durationFormat(duration) {
    const hh = Math.trunc(duration / 60);
    const mm = duration % 60;
    return `${hh > 0 ? hh + "ч " : ""}${mm}м`;
  }

  function handleBookmarkClick(evt) {
    evt.preventDefault();
    onBookmarkClick(movie, !isSaved);
  }

  function handleOnDelete() {
    onBookmarkClick(movie, false);
  }

  // const moviesIcon = (isAdded ? moviesIconCard : moviesSavedCardIcon)
  // //  В зависимости от страницы карточек отображаем иконку "добавить" или иконку "удалить"
  // const cardIcon = (pathname === "/movies" ? moviesIcon : deleteCardIcon)

  return (
    <>
      <li className="grid__item">
        <img src={image}  alt="изображение фильма" className="grid__image" />
        <div className="grid__text-container">
          <div className="grid__name-block">
            <p className="grid__text">{nameRU}</p>

            {savedMovies ? (
              <img
                alt="иконка карточки"
                className="grid__icon"
                src={deleteCardIcon}
              />
            ) : (
              <img
                alt="иконка карточки"
                className="grid__icon"
                src={moviesIconCard}
              />
            )}
          </div>
          <p className="grid__duration">{durationFormat(duration)}</p>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
