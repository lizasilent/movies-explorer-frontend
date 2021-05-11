import React from "react";
import "./MoviesCard.css";

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

  function handleDelete() {
    onBookmarkClick(movie, false);
  }

  return (
    <>
      <li className="grid__item">
        <a href={trailer}>
          <img src={image} alt="изображение фильма" className="grid__image" />
        </a>

        <div className="grid__text-container">
          <div className="grid__name-block">
            <p className="grid__text">{nameRU}</p>

            {savedMovies ? (
              <button
                className="grid__icon grid__icon_del"
                onClick={handleDelete}
              />
            ) : (
              <button onClick={handleBookmarkClick}
                className={
                  isSaved
                    ? "grid__icon grid__icon_saved"
                    : "grid__icon grid__icon_unsaved"
                }
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
