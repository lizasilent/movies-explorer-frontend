import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import mainLogo from "../../images/logo.png";
import Validation from "../../helpers/Validation";
import Form from "../Form/Form";


function Register({ handleRegister, registrationError }) {

  const formValidation = Validation();
  const {email, password, name} = formValidation.values;
  const {values, onFocus, handleChange, isFocused, errors} = formValidation;

  const submitHandle = (event) => {
    event.preventDefault();
    handleRegister(email, password, name);
    formValidation.resetForm();
  }


  return (
    <div className="login">
      <form className="login__form" type="submit" formName="register"
          submitHandle={submitHandle}
          validation={formValidation}>
      <Link to="/">
        <img alt="лого" src={mainLogo} className="login__logo" /></Link>
        <p className="login__header">Добро пожаловать!</p>
        <label htmlFor="name">
          <p className="login__label">Имя</p>
        </label>
        <input
        name="name"
        className={`login__input ${errors.name && 'login__error'}`}
        type="text"
        required
        value={values.name || ""}
        onFocus={onFocus}
        onChange={handleChange}
        minLength="2"
      />
      <span className="login__error">{isFocused && errors.name}</span>
      <Form
          submitText={{
              buttonText: "Зарегистрироваться",
              promt: "Уже зарегистрированы?",
              route: "/signin",
              linkText: "Войти"
            }}
          registrationError={registrationError}
          submitHandle={submitHandle}
          validation={formValidation}
          formName="register"
        />

      </form>
    </div>
  );
}

export default Register;
