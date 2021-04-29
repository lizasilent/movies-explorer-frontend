import React from "react";
import "./Login.css";
import mainLogo from "../../images/logo.png";

function Login() {
  return (
    <div className="login">
      <form className="login__form" type="submit">
        <img alt="лого" src={mainLogo} className="login__logo" />
        <p className="login__header">Рады видеть!</p>

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
          Еще не зарегистрированы?
          <a href="#" className="login__link">
            Регистрация
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
