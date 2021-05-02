import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__line" />

      <div className="columns">
        <div className="column">
          <p className="column__title">Дипломный проект включал 5 этапов</p>
          <p className="column__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="column">
          <p className="column__title">На выполнение диплома ушло 5 недель</p>
          <p className="column__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__scale">
        <div className="scale__visual scale__visual_blue">1 неделя</div>
        <div className="scale__visual scale__visual_grey">4 недели</div>
      </div>
      <div className="about__scale scale__text">
        <div className="scale__visual">Back-end</div>
        <div className="scale__visual">Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;
