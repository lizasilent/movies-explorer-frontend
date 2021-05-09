import React from "react";
import {  NavLink, useLocation } from "react-router-dom";
import "../Form/Form.css";

function Form({
  formName,
  submitText,
  children,
  submitHandle,
  validation,
}) {
  const {
    isValid,
  } = validation;

  // const location = useLocation().pathname;

  return (
    <form className="form" action="post" name={`${formName}-form`} onSubmit={submitHandle}>

      {children}

      <button type="submit" className="form__button" disabled={!isValid}>
      {submitText.buttonText}
      </button>
      <div className="form__sign-in">
        {`${submitText.promt} `}
        <NavLink to={submitText.route} className="form__link" >{submitText.linkText}</NavLink>

      </div>

      </form>
  );
}

export default Form;
