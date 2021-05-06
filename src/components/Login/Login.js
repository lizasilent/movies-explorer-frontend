import React from "react";
import "./Login.css";
import mainLogo from "../../images/logo.png";
import { Link } from "react-router-dom";
import Validation from "../../helpers/Validation";
import Form from "../Form/Form";

function Login({handleLogin, loginError}) {

  const formValidation = Validation();
  const {email, password} = formValidation.values;

  const submitHandle = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    formValidation.resetForm();
  }

  return (
    <section className="login">
      <div className="login__form">
      <Link to="/">
        <img alt="лого" src={mainLogo} className="login__logo" /></Link>
        <p className="login__header">Рады видеть!</p>
        <Form submitText={{
              buttonText: "Войти",
              promt: "Ещё не зарегистрированы?",
              route: "/signup",
              linkText: "Регистрация"
            }}
          submitHandle={submitHandle}
          validation={formValidation}
          loginError={loginError}
          formName="login"/>

      </div>
    </section>
  );
}

export default Login;
