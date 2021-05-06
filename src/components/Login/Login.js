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
    <div className="login">
      <form className="login__form" type="submit"  formName="login" submitHandle={submitHandle} loginError={loginError}>
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
          formName="login"
          loginError={loginError}/>

      </form>
    </div>
  );
}

export default Login;
