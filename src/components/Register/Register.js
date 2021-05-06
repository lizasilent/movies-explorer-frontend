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
    <section className="login">
      <div className="login__form">
      <Link to="/">
        <img alt="лого" src={mainLogo} className="login__logo" /></Link>
        <p className="login__header">Добро пожаловать!</p>

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
          children={
            <>
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
          </>
          }
        />

      </div>
    </section>
  );
}

export default Register;
