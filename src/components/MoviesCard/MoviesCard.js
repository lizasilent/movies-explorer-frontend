import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import testpic from "../../images/testpic.png";
import moviesIconCard from "../../images/save_icon.png";
import moviesSavedCardIcon from "../../images/saved_icon.png";
import deleteCardIcon from "../../images/delete_icon.png";


function MoviesCard() {


  const { pathname } = useLocation();
  const isAdded = true; // Поменять на false для проверки
  //Если фильм добавили в избранное
  const moviesIcon = (isAdded ? moviesIconCard : moviesSavedCardIcon)
  // Если на странице общего поиска, то берем иконку определенную на строчке выше, если нет, то иконку удаления
  const cardIcon = (pathname === "/movies" ? moviesIcon : deleteCardIcon)



  return (
    <>
      <li className="grid__item">
        <img src={testpic} alt="изображение фильма" className="grid__image" />
        <div className="grid__text-container">
          <div className="grid__name-block">
            <p className="grid__text">33 слова о дизайне</p>
            <img alt="иконка карточки" className="grid__icon"
              src={cardIcon}
            />
          </div>
          <p className="grid__duration">33 hours</p>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
