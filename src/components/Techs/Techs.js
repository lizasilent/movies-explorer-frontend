import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <div className="techs">
      <h2 className="about__title">Технологии</h2>
      <div className="about__line" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="navigation__menu navigation__menu_square">
        <li className="navigation__link_square">HTML</li>
        <li className="navigation__link_square">CSS</li>
        <li className="navigation__link_square">JS</li>
        <li className="navigation__link_square">React</li>
        <li className="navigation__link_square">Git</li>
        <li className="navigation__link_square">Express.js</li>
        <li className="navigation__link_square">mongoDB</li>
      </ul>
    </div>
  );
}

export default Techs;
