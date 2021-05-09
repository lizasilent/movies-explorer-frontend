/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import apiMovies from "../../utils/MoviesApi";
import apiMain from "../../utils/MainApi";

import "./App.css";

import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import Popup from "../Popup/Popup";
import sucessLogoPath from "../../images/sucesspopup.png";
import failLogoPath from "../../images/failpopup.png";

function App() {
  const history = useHistory();
  let location = useLocation();

  const [isLogin, setIsLoggedIn] = React.useState(false); // статус логина
  const [currentUser, setCurrentUser] = React.useState({}); // данные юзера

  const [isPopupOpen, setIsPopupOpen] = React.useState(false); //открытие попапа с ошибкой
  const [message, setMessage] = React.useState({ iconPath: "", text: "" }); // его содержимое

  const [isLoading, setIsLoading] = React.useState(false); // проверка статуса загрузки карточек
  const [movies, setMovies] = React.useState([]);

  // меняем содержимое попапа
  const handlePopupContent = ({ iconPath, text }) => {
    setMessage({ iconPath: iconPath, text: text });
  };

  // Закрытие попапов с ошибками
  function closeAllPopups() {
    setIsPopupOpen(false);
  }

  // установка и проверка токена
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      apiMain
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            getCurrentUser();
            history.push("/movies");
          }
        })
        .catch((err) => {
          console.log("какая-то фигня с твоим токеном" + err);
          // localStorage.removeItem('token')
          history.push("/");
        });
    }
  }, []);

  // получаем данные текущего пользователя
  function getCurrentUser() {
    const token = localStorage.getItem("token");
    apiMain
      .getCurrentUser(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // регистрация пользователя
  function handleRegister({ name, email, password }) {
    if (!name || !email || !password) {
      return;
    }
    apiMain
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);

          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: sucessLogoPath,
            text: "Вы успешно зарегистрировались!",
          });
          setTimeout(history.push, 3000, "/signin");
          setTimeout(closeAllPopups, 2500);
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Такой email уже существует",
          });
        } else {
          // setRegisteredError(true);
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Что-то пошло не так! Попробуйте ещё раз.",
          });
          setTimeout(closeAllPopups, 2500);
        }
      });
  }

  function handleLogin(email, password) {
    apiMain
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Неверный email или пароль",
          });
          setTimeout(closeAllPopups, 2500);
        } else {
          setIsPopupOpen(true);
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Что-то пошло не так!",
          });
          setTimeout(closeAllPopups, 2500);
        }
      });
  }

  // function onSubmitLogin({email, password}) {
  //   if (!email || !password) {
  //     return;
  //   }
  //   login(email, password);
  // }

  // Выход
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    history.push("/");
  }

  // обновление информации о юзере
  function handleEditProfile(data) {
    apiMain
      .editProfile(data)
      .then((profile) => {
        setCurrentUser(profile);
        console.log(profile)
        setIsPopupOpen(true);
        handlePopupContent({
          iconPath: sucessLogoPath,
          text: "Информация обновлена",
        });
        setTimeout(history.push, 3000, "/profile");
        setTimeout(closeAllPopups, 2500);
      })
      .catch((err) => {
        if (err.status === 409) {
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Такой email уже зарегистрирован",
          });
        } else {
          handlePopupContent({
            iconPath: failLogoPath,
            text: "Что-то пошло не так!",
          });
        }
        setIsPopupOpen(true);
        setTimeout(closeAllPopups, 2500);
        console.log(err);
      });
  }

  // получение данных о всех фильмах внешнего сервиса и сохранение массива в localStorage
  function getMovies() {
    setIsLoading(true);
    apiMovies
      .getAllMovies()
      .then((movies) => {
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .catch(() => {
        localStorage.removeItem("movies");
      })
      .finally(() => setIsLoading(false));
  }

  function devLogincheck() {
    const token = localStorage.getItem("token");
    console.log(isLogin);
    console.log(currentUser);
  }

  devLogincheck();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Switch>
            <Route exact path="/">
              <Header isLogin={isLogin} />
              <Main />
              <Footer />
            </Route>

            <ProtectedRoute
              exact
              path="/movies"
              component={Movies}
              isLogin={isLogin}
            />
            <ProtectedRoute
              exact
              path="/saved-movies"
              component={Movies}
              isLogin={isLogin}
            />
            <ProtectedRoute
              exact
              path="/profile"
              component={Profile}
              isLogin={isLogin}
              handleLogout={handleLogout}
              handleEditProfile={handleEditProfile}
            />
            <Route exact path="/signin">
              <Login handleLogin={handleLogin} />
            </Route>
            <Route exact path="/signup">
              <Register handleRegister={handleRegister} />
            </Route>
            <Route path="/*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Popup
            isOpen={isPopupOpen}
            onClose={closeAllPopups}
            message={message}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
