import './App.css';
import mainLogo from "../../images/logo.png";
import testpic from "../../images/testpic.png";
import searchpic from "../../images/search_icon.png";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";

function App() {
  return (
    <div className="page">
      <div className="page__content">
       <Header/>
       <Main/>
      <Footer/>

        <div className="search">
          <div className="search__form">
            <div className="search__left-box">
              <img
                src={searchpic}
                alt="иконка поиска"
                className="search__image"
              />
              <input
                name="search"
                placeholder="Фильм"
                type="search"
                className="search__input"
              />
              <button type="submit" className="search__button">
                Найти
              </button>
            </div>
            <div className="search__line"></div>
            <div className="search__right-box">
              <input
                type="checkbox"
                name="toggle"
                id="toggle-button"
                className="switch__toggle-button"
              />
              <label htmlFor="switch__toggle-button" className="switch__text">
                Короткометражки
              </label>
            </div>
          </div>
          <div className="portfolio__line portfolio__line_invisible" />
        </div>

        <div className="grid">
          <ul className="grid__template">
            <li className="grid__item">
              <img src={testpic} alt="" className="grid__image" />
              <div className="grid__text-container">
                <div className="grid__name-block">
                  <p className="grid__text">33 слова о дизайне</p>
                  <button
                    className="grid__save-btn grid__save-btn_saved"
                    type="button"
                  />
                </div>
                <p className="grid__duration">33 hours</p>
              </div>
            </li>
            <li className="grid__item">
              <img src={testpic} alt="" className="grid__image" />
              <div className="grid__text-container">
                <div className="grid__name-block">
                  <p className="grid__text">33 слова о дизайне</p>
                  <button
                    className="grid__save-btn grid__save-btn_saved"
                    type="button"
                  />
                </div>
                <p className="grid__duration">33 hours</p>
              </div>
            </li>
            <li className="grid__item">
              <img src={testpic} alt="" className="grid__image" />
              <div className="grid__text-container">
                <div className="grid__name-block">
                  <p className="grid__text">33 слова о дизайне</p>
                  <button
                    className="grid__save-btn grid__save-btn_saved"
                    type="button"
                  />
                </div>
                <p className="grid__duration">33 hours</p>
              </div>
            </li>
            <li className="grid__item">
              <img src={testpic} alt="" className="grid__image" />
              <div className="grid__text-container">
                <div className="grid__name-block">
                  <p className="grid__text">33 слова о дизайне</p>
                  <button
                    className="grid__save-btn grid__save-btn_saved"
                    type="button"
                  />
                </div>
                <p className="grid__duration">33 hours</p>
              </div>
            </li>
            <li className="grid__item">
              <img src={testpic} alt="" className="grid__image" />
              <div className="grid__text-container">
                <div className="grid__name-block">
                  <p className="grid__text">33 слова о дизайне</p>
                  <button
                    className="grid__save-btn grid__save-btn_saved"
                    type="button"
                  />
                </div>
                <p className="grid__duration">33 hours</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="more">
          <button className="more__button" type="button">
            Еще
          </button>
        </div>

        <div className="login">
          <form className="login__form" type="submit">
            <img alt="лого" src={mainLogo} className="login__logo" />
            <p className="login__header">Добро пожаловать!</p>

            <label for="name">
              <p className="login__label">Имя</p>
            </label>
            <input name="name" className="login__input" type="email" required />
            <span
              className="login__error login__error_is-active"
              id="description-error"
            />

            <label for="email">
              <p className="login__label">E-mail</p>
            </label>
            <input
              name="email"
              className="login__input"
              type="email"
              required
            />
            <span
              className="login__error login__error_is-active"
              id="description-error"
            />

            <label for="password">
              <p className="login__label">Пароль</p>
            </label>
            <input
              name="password"
              className="login__input"
              type="password"
              required
            />
            <span
              className="login__error login__error_is-active"
              id="description-error"
            />

            <button type="submit" className="login__button">
              Зарегистрироваться
            </button>
            <div className="login__sign-in">
              Уже зарегистрированы?
              <a href="#" className="login__link">
                Войти
              </a>
            </div>
          </form>
        </div>

        <div className="login">
          <form className="login__form" type="submit">
            <img alt="лого" src={mainLogo} className="login__logo" />
            <p className="login__header">Рады видеть!</p>

            <label for="email">
              <p className="login__label">E-mail</p>
            </label>
            <input
              name="email"
              className="login__input"
              type="email"
              required
            />
            <span
              className="login__error login__error_is-active"
              id="description-error"
            />

            <label for="password">
              <p className="login__label">Пароль</p>
            </label>
            <input
              name="password"
              className="login__input"
              type="password"
              required
            />
            <span
              className="login__error login__error_is-active"
              id="description-error"
            />

            <button type="submit" className="login__button">
              Зарегистрироваться
            </button>
            <div className="login__sign-in">
              Еще не зарегистрированы?
              <a href="#" className="login__link">
                Регистрация
              </a>
            </div>
          </form>
        </div>

        <div className="profile">
          <div className="profile__form" type="submit">
            <p className="profile__header">Привет, Лиза!</p>

            <div className="profile__row">
              <p className="profile__text">Имя</p>
              <p className="profile__text">Лиза</p>
            </div>

            <div className="profile__row profile__row_invisible">
              <p className="profile__text">E-mail</p>
              <p className="profile__text">pochta@yandex.ru</p>
            </div>
            <button type="submit" className="profile__button">
              Редактировать
            </button>
            <a href="#" className="profile__link">
              Выйти из аккаунта
            </a>
          </div>
        </div>

        <div>
          <div className="not-found-page">
            <p className="not-found-page__header"> 404 </p>
            <p className="not-found-page__text"> Страница не найдена</p>
            <a href="#" className="not-found-page__link">
              {" "}
              Назад{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
