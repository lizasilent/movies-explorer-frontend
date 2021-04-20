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
              <p className="promo__title">Учебный проект студента факультета Веб-разработки.</p>
            </div>
            <div className="navigation">
              <nav>
              <a href="#" className="navigation__link">О проекте</a>
              <a href="#" className="navigation__link">Технологии</a>
              <a href="#" className="navigation__link">Студент</a>
                </nav>
            </div>
            <div className="about">
              <p className="">О проекте</p>

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
