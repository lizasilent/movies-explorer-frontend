import React from "react";
import "../Login/Login.css";
import mainLogo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="login">
      <form className="login__form" type="submit">
      <Link to="/">
        <img alt="лого" src={mainLogo} className="login__logo" /></Link>
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
        <input name="email" className="login__input" type="email" required />
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
          <Link to="/signin" className="login__link">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
