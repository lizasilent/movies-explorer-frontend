import React from "react";
import { Link } from 'react-router-dom';
import "./NavTab.css";

//Навигация примерная, заработает когда будет готов весь сайт

function NavTab() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li>
          <Link to="/" className="navigation__link">
            О проекте
          </Link>
        </li>
        <li>
          <Link to="/techs" className="navigation__link">
            Технологии
          </Link>
        </li>
        <li>
          <Link to="/aboutme" className="navigation__link">
            Студентка
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
