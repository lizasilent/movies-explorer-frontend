import React from 'react';
import './SearchForm.css';
import searchpic from "../../images/search_icon.png";

function SearchForm() {
  return(
<div className="search">
          <div className="search__form">
            <div className="search__left-box">
              <img
                src={searchpic}
                alt="иконка поиска"
                className="search__image"
              />
              <input
                name="search"
                placeholder="Фильм"
                type="search"
                className="search__input"
              />
              <button type="submit" className="search__button">
                Найти
              </button>
            </div>
            <div className="search__line"></div>
            <div className="search__right-box">
              <input
                type="checkbox"
                name="toggle"
                id="toggle-button"
                className="switch__toggle-button"
              />
              <label htmlFor="switch__toggle-button" className="switch__text">
                Короткометражки
              </label>
            </div>
          </div>
          <div className="portfolio__line portfolio__line_invisible" />
        </div>
  )
}

export default SearchForm;
