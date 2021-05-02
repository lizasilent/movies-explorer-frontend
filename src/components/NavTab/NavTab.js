import React from "react";
import "./NavTab.css";

//Навигация примерная, заработает когда будет готов весь сайт

function NavTab() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li>
          <a href="#about" className="navigation__link">
            О проекте
          </a>{" "}
        </li>
        <li>
          <a href="#techs" className="navigation__link">
            Технологии
          </a>{" "}
        </li>
        <li>
          <a href="#about-me" className="navigation__link">
            Студентка
          </a>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
