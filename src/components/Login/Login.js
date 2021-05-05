import React from "react";
import "./Login.css";
import mainLogo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Validation, validationTexts} from "../../helpers/Validation";

function Login({handleLogin, loginError}) {

  const formValidation = Validation();
  const {email, password} = formValidation.values;
  const {values, handleChange, errors, isValid, resetForm, onFocus, isFocused, setValues} = Validation();

  const submitHandle = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    formValidation.resetForm();
  }


  return (
    <div className="login">
      <form className="login__form" type="submit"  formName="login" submitHandle={submitHandle} loginError={loginError}>
      <Link to="/">
        <img alt="лого" src={mainLogo} className="login__logo" /></Link>
        <p className="login__header">Рады видеть!</p>

        <label for="email">
          <p className="login__label">E-mail</p>
        </label>
        <input name="email" className="login__input" type="email" required value={values.email || ''}
        onFocus={onFocus}
        onChange={handleChange}
        minLength="2" />
        <span
          className="login__error">{isFocused && errors.email}</span>

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
          className="login__error">{isFocused && errors.password}</span>

        <button type="submit" className="login__button" >
          Зарегистрироваться
        </button>
        <div className="login__sign-in">
          Еще не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
