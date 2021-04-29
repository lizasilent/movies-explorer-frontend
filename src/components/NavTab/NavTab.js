import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="navigation">
      <ul className="navigation__menu">
        <li>
          <a href="#" className="navigation__link">
            О проекте
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            Технологии
          </a>
        </li>
        <li>
          <a href="#" className="navigation__link">
            Студентка
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTab;
