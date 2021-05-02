import React from "react";
import "./AboutMe.css";
import myPhoto from "../../images/avatar.jpg";


function AboutMe() {
  return (
    <div className="about-me"  id="about-me">
      <h2 className="about__title">Студентка</h2>
      <div className="about__line" />

      <div className="about-me__info">
        <div className="about-me__text">
          <p className="about-me__name">Елизавета</p>
          <p className="about-me__profession">Фронтенд-разработчица, 30 лет</p>
          <p className="about-me__description">
            Живу в Петербурге, когда-то закончила филфак, а теперь руковожу
            книжным интернет-магазином. Очень люблю все что связано с наукой,
            литературой, музыкой, современной культурой. В Практикум сначала
            пошла чтобы глубже понять собственный сайт, но обучение оказалось
            таким интересным и сложным, что, надеюсь, я смогу применить это всё
            и в работе.
          </p>
          <div className="about-me__social">
            <a
              href="https://www.facebook.com/lizaveta.silent/"
              className="about-me__link"
            >
              Facebook
            </a>
            <a href="https://github.com/lizasilent" className="about-me__link">
              Github
            </a>
          </div>
        </div>
        <img className="about-me__avatar" src={myPhoto} alt="аватар"></img>
      </div>
    </div>
  );
}

export default AboutMe;
