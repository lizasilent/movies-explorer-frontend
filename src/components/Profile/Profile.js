/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Profile.css";
// import Validation from "../../helpers/Validation";
import Header from "../Header/Header";
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ isLogin, handleLogout, handleEditProfile}) {

  const [formValues, setFormValues] = React.useState({
    name: '',
    email: ''
  });

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setFormValues({
      ...formValues,
      name: currentUser.name || '',
      email: currentUser.email || ''
    })
  }, [currentUser]);

  function handleInputChange(evt) {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name] : value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleEditProfile(formValues);
    console.log(currentUser);
  }



  // const formValidation = Validation();
  // const { name, email } = formValidation.values;

  // const submitEditProfile = (event) => {
  //   event.preventDefault();
  //   editProfile(name, email);
  // };

  return (
    <>
      <Header isLogin={isLogin} />
      <div className="profile">
        <form onSubmit={handleSubmit}
          name="edit-form"
          className="profile__form"
          type="submit"
        >
          <p className="profile__header">
            Привет, {currentUser.name}!
          </p>

          <div className="profile__row">
            <label className="profile__text" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__text profile__input"
              placeholder="Лиза"
              type="text"
              name="name"
              required
              minLength="2"
              maxLength="30"
            >
            </input>
          </div>

          <div className="profile__row profile__row_invisible">
            <label htmlFor="email" className="profile__text">
              E-mail
            </label>
            <input
              className="profile__text profile__input"
              placeholder="Email"
              type="email"
              name="email"
              required
            >
            </input>
          </div>
          <p className='profile__form-error'></p>
            {/* {isEditError && <p className='profile__form-error'>Ошибка обновления данных</p>}
            {isEditDone && <p className='profile__form-done'>Данные успешно обновлены</p>} */}
          <button type="submit" className="profile__button">
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
