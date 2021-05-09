import React from "react";
import { Link } from "react-router-dom";
import "../Form/Form.css";

function Form({
  formName,
  submitText,
  children,
  registrationError,
  submitHandle,
  validation,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    isFocused,
    onFocus,
  } = validation;

  return (
    <form className="login__form" action="post" onSubmit={submitHandle} name={`${formName}-form`}>
      {children}
      <label htmlFor="email">
        <p className="login__label">E-mail</p>
      </label>
      <input
        name="email"
        className={`login__input ${errors.email && 'login__error'}`}
        type="email"
        required
        value={values.email || ""}
        onFocus={onFocus}
        onChange={handleChange}
        minLength="2"
      />
      <span className="login__error">{isFocused && errors.email}</span>

      <label htmlFor="password">
        <p className="login__label">Пароль</p>
      </label>
      <input
        name="password"
        className={`login__input ${errors.password && 'login__error'}`}
        type="password"
        required
        value={values.password || ''}
        onFocus={onFocus}
        onChange={handleChange}
        minLength="2"
      />
      <span className="login__error">{isFocused && errors.password}</span>
      <button type="submit" className="login__button" disabled={!isValid}>
      {submitText.buttonText}
      </button>
      {registrationError && <p className='login__error'>Ошибка регистрации</p>}
      <div className="login__sign-in">
        {`${submitText.promt} `}
        <Link className="login__link" to={submitText.route}>{submitText.linkText}</Link>

      </div>

      </form>
  );
}

export default Form;
