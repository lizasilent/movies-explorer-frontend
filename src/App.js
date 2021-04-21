import './App.css';
import mainLogo from "./images/logo.png";
import myPhoto from "./images/avatar.jpg";
import userLogo from "./images/main_icon.png";
import testpic from "./images/testpic.png";

function App() {
  return (
  <div className="page">
    <div className="page__content">
            <header className="header">
            <div className="header__logo">
            <img alt='лого' src={mainLogo}/>
            </div>
                <div className="header__container">
                <a href="#" className="header__signup">Регистрация</a>
                  <button className="header__button">Войти</button>
                </div>
          </header>
          <main>
            <div className="promo">
              <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
            <div className="navigation">
                <ul className="navigation__menu">
              <li><a href="#" className="navigation__link">О проекте</a></li>
              <li><a href="#" className="navigation__link">Технологии</a></li>
              <li><a href="#" className="navigation__link">Студентка</a></li>
              </ul>
            </div>
            <div className="about">
              <h2 className="about__title">О проекте</h2>
              <div className="about__line"/>

              <div className="columns">
                <div className="column">
                  <p className="column__title">Дипломный проект включал 5 этапов</p>
                  <p className="column__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="column">
                  <p className="column__title">На выполнение диплома ушло 5 недель</p>
                  <p className="column__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
              <div className="about__scale">
              <div className="scale__visual scale__visual_green">1 неделя</div>
              <div className="scale__visual scale__visual_grey">4 недели</div>
              </div>
              <div className="about__scale scale__text">
              <div className="scale__visual">Back-end</div>
              <div className="scale__visual">Front-end</div>
              </div>
              
            </div>
            <div className="techs">
            <h2 className="about__title">Технологии</h2>
            <div className="about__line"/>
            <h3 className="techs__title">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="navigation__menu">
            <li className="navigation__link_square">HTML</li>
            <li className="navigation__link_square">CSS</li>
            <li className="navigation__link_square">JS</li>
            <li className="navigation__link_square">React</li>
            <li className="navigation__link_square">Git</li>
            <li className="navigation__link_square">Express.js</li>
            <li className="navigation__link_square">mongoDB</li>
            </ul>
            </div>
            <div className="aboutMe">
            <h2 className="about__title">Студентка</h2>
            <div className="about__line"/>

            
              <div className="aboutMe__info">
              <div className="aboutMe__text">
                <p className="aboutMe__name">Елизавета</p>
                <p className="aboutMe__profession">Фронтенд-разработчица, 30 лет</p>
                <p className="aboutMe__description">Живу в Петербурге, когда-то закончила филфак, а теперь руковожу книжным интернет-магазином. Очень люблю все что связано с наукой, литературой, музыкой, современной культурой. В Практикум сначала пошла чтобы глубже понять собственный сайт, но обучение оказалось таким интересным и сложным, что, надеюсь, я смогу применить это всё и в работе. 
</p>
                <div className="aboutMe__social">
                <a href="https://www.facebook.com/lizaveta.silent/" className="aboutMe__link">Facebook</a>
                <a href="https://github.com/lizasilent" className="aboutMe__link">Github</a>
                </div>
              </div>
              <img className="aboutMe__avatar" src={myPhoto} alt="аватар"></img>
              </div>
              </div>

            <div className="portfolio">
              <p className="portfolio__title">Портфолио</p>
              <div className="portfolio__menu"><p className="portfolio__text">Статичный сайт</p><p><a href="#" className="portfolio__link">↗</a></p></div>
              <div className="portfolio__line"/>
              <div className="portfolio__menu"><p className="portfolio__text">Адаптивный сайт</p><p><a href="#" className="portfolio__link">↗</a></p></div>
              <div className="portfolio__line"/>
              <div className="portfolio__menu"><p className="portfolio__text">Одностраничное приложение</p><p><a href="#" className="portfolio__link">↗</a></p></div>
            </div>
          </main>
          
          <footer className="footer">

          <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
          <div className="portfolio__line"/>
          <div className="footer__infobox">
            <p className="footer__copyright">© 2020</p>
            <ul className="footer__links">
            <li><a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a></li>
            <li><a href="https://github.com/lizasilent" className="footer__link">Github</a></li>
            <li><a href="https://www.facebook.com/lizaveta.silent/" className="footer__link">Facebook</a></li>
          </ul>
          </div>

          </footer>
          <header className="header header_white">
            <div className="header__logo">
            <img alt='лого' src={mainLogo}/>
            </div>
            <div>
            <div className="header__container">
              <p className="header__signup">Фильмы</p>
              <p className="header__signup">Сохраненные фильмы</p>
              </div>

            </div>
                <div className="header__container">
                <p className="header__signup">Аккаунт</p>
                <a href="" className="header__signup"><img src={userLogo}/></a>
                </div>
          </header>
          <div className="search">
            <form action="" method="get" classname="search__bar">
            <input name="search" placeholder="Фильм" type="search" classname="search__input"/>
            <button type="submit" classname="search__button">Поиск</button>
          </form>
          </div>
          <div className="grid">
          <ul className="grid__template">
          <li className="grid__item">
        <img src={testpic} alt="" className="grid__image"/>
        <div className="grid__text-container">
          <p className="grid__text">33 слова о дизайне</p>
          <p className="grid__duration">33 hours</p>
        </div>
      </li>
     
          </ul>
          </div>
          <div className="more">
          <button className="more__button" type="button">Еще</button>
          </div>

    </div>
  </div>
  );
}

export default App;
