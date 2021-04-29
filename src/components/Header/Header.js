/* eslint-disable no-lone-blocks */
import React from "react";
import "./Header.css"; // импортируем CSS-файл
import mainLogo from "../../images/logo.png";
// import userLogo from "../../images/main_icon.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img alt="лого" src={mainLogo} />
      </div>
      <div className="header__container">
        <a href="#" className="header__signup">
          Регистрация
        </a>
        <button className="header__button">Войти</button>
      </div>
    </header>
  );
}

export default Header;

{
  /* <header className="header header_white">
<div className="header__logo">
  <img alt="лого" src={mainLogo} />
</div>
<div>
  {/* <div className="header__burger-menu">
      <span></span>
  </div> */
}
//   <div className="header__container">
//     <a className="header__signup">Фильмы</a>
//     <a className="header__signup">Сохраненные фильмы</a>
//   </div>
// </div>
// <div className="header__container">
//   <a className="header__signup">Аккаунт</a>
//   <a href="" className="header__signup">
//     <img src={userLogo} />
//   </a>
// </div>
// </header> */}
