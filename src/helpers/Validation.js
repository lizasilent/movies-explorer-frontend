import React from 'react';

function validationTexts(name, value) {
  let errors = {};
  if(name === 'email') {
    if(!value) {
      errors = ({[name]: 'Введите email'});
    } else if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value)) {
      errors = ({[name]: 'Email не валиден'});
    }
  }
  if (name === 'password') {
    if(!value) {
      errors = ({[name]: 'Введите пароль'});
    }
  }
  if(name === 'name') {
    if(!value) {
      errors = ({[name]: 'Введите имя'})
    } else if (!/^[a-zA-Z\s-]+$/.test(value)) {
      errors = ({[name]: 'Латиница, пробел или дефис'});
    } else if (value.length < 1) {
      errors = ({[name]: 'Длина слова должна быть более 2 символов'});
    }
  }

  return errors;
}

function Validation(){
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const onFocus = () => {
    setIsFocused(true);
  }

  const handleChange = (event) => {
    const {target} = event;
    const {name} = target;
    const {value} = target;
    const error = validationTexts(name, value);
    setErrors(validationTexts(name, value));
    setValues({...values, [name]: value});
    if(Object.keys(error).length === 0){
      setIsValid(target.closest("form").checkValidity());
    }
  };

  const resetForm = React.useCallback(
    (newErrors = {}, newIsValid = false) => {
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, onFocus, isFocused, setValues };
}

export default Validation;
