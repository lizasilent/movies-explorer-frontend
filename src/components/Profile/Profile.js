/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Profile.css";
import Validation from "../../helpers/Validation";
import Header from "../Header/Header";

function Profile({
  currentUser,
  isLogin,
  editProfile,
  isEditError,
  isEditDone,
  handleLogout,
}) {

  const formValidation = Validation();
  const { name, email } = formValidation.values;

  const submitEditProfile = (event) => {
    event.preventDefault();
    editProfile(name, email);
  };

  return (
    <>
      <Header isLogin={isLogin} />
      <div className="profile">
        <form
          name="edit-form"
          className="profile__form"
          type="submit"
          onSubmit={submitEditProfile}
        >
          <p className="profile__header">
            Привет, {currentUser.name}!
          </p>

          <div className="profile__row">
            <label className="profile__text" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__text"
              type="text"
              name="name"
              onChange={formValidation.handleChange}
              value={name || ""}
              required
              minLength="2"
              maxLength="30"
            >
              {currentUser.name}
            </input>
          </div>

          <div className="profile__row profile__row_invisible">
            <label htmlFor="email" className="profile__text">
              E-mail
            </label>
            <input
              className="profile__text"
              type="email"
              name="email"
              onChange={formValidation.handleChange}
              value={email || ""}
              required
            >
              {currentUser.email}
            </input>
          </div>
          <p className='profile__form-error'>{formValidation.errors.name||formValidation.errors.email}</p>
            {isEditError && <p className='profile__form-error'>Ошибка обновления данных</p>}
            {isEditDone && <p className='profile__form-done'>Данные успешно обновлены</p>}
          <button type="submit" className="profile__button"> disabled={currentUser && (name === currentUser.name && email === currentUser.email) || !formValidation.isValid}
            Редактировать
          </button>
          <button onClick={handleLogout} className="profile__link">
            Выйти из аккаунта
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;
