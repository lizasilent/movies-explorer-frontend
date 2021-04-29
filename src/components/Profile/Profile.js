import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__form" type="submit">
        <p className="profile__header">Привет, Лиза!</p>

        <div className="profile__row">
          <p className="profile__text">Имя</p>
          <p className="profile__text">Лиза</p>
        </div>

        <div className="profile__row profile__row_invisible">
          <p className="profile__text">E-mail</p>
          <p className="profile__text">pochta@yandex.ru</p>
        </div>
        <button type="submit" className="profile__button">
          Редактировать
        </button>
        <a href="#" className="profile__link">
          Выйти из аккаунта
        </a>
      </div>
    </div>
  );
}

export default Profile;
