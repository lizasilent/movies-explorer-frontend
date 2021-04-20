import './App.css';
// import mainLogo from "../images/logo.png";

function App() {
  return (
  <div className="page">
    <div className="page__content">
            <header className="header">
            <div className="header__logo">
            <img alt='Logo' src="../images/logo.png"/>
            </div>
                <div className="header__container">
                  <p className="header__signup">Регистрация</p>
                  <button className="header__button">Войти</button>
                </div>
          </header>
          <main>
            <div className="promo">
              <p className="promo__title">Учебный проект студента факультета Веб-разработки.</p>
            </div>
            <div className="navTab"></div>
            <div className="aboutProject"></div>
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
