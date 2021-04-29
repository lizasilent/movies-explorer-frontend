import './App.css';
import mainLogo from "../../images/logo.png";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js"

function App() {
  return (
    <div className="page">
      <div className="page__content">
       <Header/>
       <Main/>
       <Movies/>
      <Footer/>

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
