import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="portfolio__line" />
      <div className="footer__infobox">
        <p className="footer__copyright">© 2020</p>
        <ul className="footer__links">
          <li>
            <a
              href="https://praktikum.yandex.ru/"
              className="footer__link"
              target="blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lizasilent"
              className="footer__link"
              target="blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/lizaveta.silent/"
              className="footer__link"
              target="blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
