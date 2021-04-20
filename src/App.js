import './App.css';
import mainLogo from "./images/logo.png"

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
              <nav>
                <ul className="navigation__menu">
              <li><a href="#" className="navigation__link">О проекте</a></li>
              <li><a href="#" className="navigation__link">Технологии</a></li>
              <li><a href="#" className="navigation__link">Студент</a></li>
              </ul>
              </nav>
            </div>
            <div className="about">
              <p className="about__title">О проекте</p>

              <div className="columns">
                <div className="column">
                  <p>Дипломный проект включал 5 этапов</p>
                  <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="column">
                  <p>На выполнение диплома ушло 5 недель</p>
                  <p>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
              </div>
              <div>1 неделя</div>
              <p>Back-end</p>
              <div>4 недели</div>
              <p>Front-end</p>
              

            </div>
            <div className="techs"></div>
            <div className="aboutMe"></div>
            <div className="portfolio"></div>
          </main>
          
          <footer></footer>
    </div>
  </div>
  );
}

export default App;
