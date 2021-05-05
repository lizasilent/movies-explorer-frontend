/* eslint-disable no-lone-blocks */
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import mainLogo from "../../images/logo.png";
import userLogo from "../../images/main_icon.png";

function Header() {
  return (
    <header className="header header_white">
      <Link to="/">
        <div className="header__logo">
          <img alt="лого" src={mainLogo} />
        </div>
      </Link>

      <div className="header__menu">
        <div className="header__container">
          <Link to="/movies" className="header__account">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__account">
            Сохраненные фильмы
          </Link>
        </div>
      </div>
      <div className="header__container">
        <Link to="/profile" className="header__account">
          Аккаунт
        </Link>
        <Link to="/profile" className="header__link">
          <img src={userLogo} alt="иконка [хедера" className="header__icon" />
        </Link>

        <div className="header__hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <Link to="/" className="menu__item">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/movies" className="menu__item">
                Фильмы{" "}
              </Link>
            </li>
            <li>
              <Link to="/saved-movies" className="menu__item">
                {" "}
                Сохраненные фильмы{" "}
              </Link>
            </li>
            <li>
              <div className="menu__container">
                <Link to="/profile" className="menu__link">
                  Аккаунт
                </Link>
                <Link to="/profile" className="header__link">
                  <img src={userLogo} alt="иконка" className="header__icon" />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

// Тут ниже заккоментирован хедер для первой страницы, будет меняться в зависимости от логина

{
  /* <header className="header">
<div className="header__logo">
  <img alt="лого" src={mainLogo} />
</div>
<div className="header__container">
  <a href="#" className="header__signup">
    Регистрация
  </a>
  <button className="header__button">Войти</button>
</div>
</header> */
}
