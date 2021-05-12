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

  const [isLogin, setIsLoggedIn] = React.useState(false); // статус логина
  const [currentUser, setCurrentUser] = React.useState({}); // данные юзера

  const [isPopupOpen, setIsPopupOpen] = React.useState(false); //открытие попапа с ошибкой
  const [message, setMessage] = React.useState({ iconPath: "", text: "" }); // его содержимое

  const [isLoading, setIsLoading] = React.useState(false); //загрузка
  const [loadingError, setLoadingError] = React.useState(""); //ошибка загрузки

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
  function handleRegister(name, email, password) {
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

  // Выход
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    history.push("/");
    localStorage.removeItem("initialMovies");
    localStorage.removeItem("savedMovies");
    setInitialMovies([]);
    setSavedMovies([]);
    setFilterMovies([]);
    setFilterSavedMovies([]);
  }

  // обновление информации о юзере
  function handleEditProfile(data) {
    console.log(data);
    apiMain
      .editProfile(data)
      .then((profile) => {
        setCurrentUser(profile);
        console.log(profile);
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

  /*** поиск фильма ***/
  const [initialMovies, setInitialMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);
  const [query, setQuery] = React.useState("");

  function getInitialMovies() {
    apiMovies
      .getAllMovies()
      .then((data) => {
        const initialArray = data.map((item) => {
          const imageURL = item.image ? item.image.url : "";
          return {
            ...item,
            image: `https://api.nomoreparties.co${imageURL}`,
            trailer: item.trailerLink,
          };
        });

        localStorage.setItem("initialMovies", JSON.stringify(initialArray));
        setInitialMovies(initialArray);
      })
      .catch((err) => {
        localStorage.removeItem("initialMovies");
        setLoadingError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }

  function getSavedMovies() {
    apiMain
      .getMovies()
      .then((data) => {
        const savedArray = data.map((item) => {
          return { ...item, id: item.movieId };
        });
        localStorage.setItem("savedMovies", JSON.stringify(savedArray));
        setSavedMovies(savedArray);
      })
      .catch(() => {
        localStorage.removeItem("savedMovies");
        setLoadingError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }

  React.useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("initialMovies"));
    if (initial) {
      setInitialMovies(initial);
    } else {
      getInitialMovies();
    }

    const saved = JSON.parse(localStorage.getItem("savedMovies"));
    if (saved) {
      setSavedMovies(saved);
    } else {
      getSavedMovies();
    }
  }, []);

  React.useEffect(() => {
    if (isLogin) {
      //после авторизации обновим данные для текущего пользователя
      getInitialMovies();
      getSavedMovies();
    }
  }, [isLogin]);

  function isSavedMovie(movie) {
    return savedMovies.some((item) => item.id === movie.id);
  }

  function filter(data, query) {
    if (query) {
      const regex = new RegExp(query, "gi");
      const filterData = data.filter((item) => {
        return regex.test(item.nameRU) || regex.test(item.nameEN);
      });
      if (filterData.length === 0) {
        setLoadingError("Ничего не найдено");
      } else {
        setLoadingError("");
      }
      return filterData;
    }
    return [];
  }

  function onSubmitSearch(query) {
    setIsLoading(true);
    setTimeout(() => {
      setQuery(query);
      setFilterMovies(filter(initialMovies, query));
      setIsLoading(false);
    }, 500);
  }

  function onSubmitSearchSaved(query) {
    setIsLoading(true);
    setTimeout(() => {
      setQuery(query);
      setFilterSavedMovies(filter(savedMovies, query));
      setIsLoading(false);
    }, 500);
  }

  //избранное
  function onBookmarkClick(movie, isMarked) {
    if (isMarked) {
      addMovie(movie);
    } else {
      deleteMovie(movie);
    }
  }

  //удаление из избранного
  function deleteMovie(movie) {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
    apiMain
      .deleteMovies(movieId)
      .then((res) => {
        if (res) {
          const newArray = savedMovies.filter(
            (item) => item.movieId !== res.movieId
          );
          setSavedMovies(newArray);
        }
      })
      .catch(() => {
        setIsPopupOpen(true);
        handlePopupContent({
          iconPath: failLogoPath,
          text: "На сервере произошла ошибка",
        });
        setTimeout(closeAllPopups, 2500);
      });
  }

  //добавление в избранное
  function addMovie(movie) {
    apiMain
      .createMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch(() => {
        setIsPopupOpen(true);
        handlePopupContent({
          iconPath: failLogoPath,
          text: "На сервере произошла ошибка",
        });
        setTimeout(closeAllPopups, 2500);
      });
  }

  React.useEffect(() => {
    setFilterSavedMovies(filter(savedMovies, query));
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  // // Разработка
  // function devLogincheck() {
  //   const token = localStorage.getItem("token");
  //   console.log(isLogin);
  //   console.log(currentUser);
  // }

  // devLogincheck();

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
              savedMovies={false}
              movies={filterMovies}
              isLoading={isLoading}
              loadingError={loadingError}
              isSavedMovie={isSavedMovie}
              onSubmitSearch={onSubmitSearch}
              onBookmarkClick={onBookmarkClick}
            />
            <ProtectedRoute
              exact
              path="/saved-movies"
              component={Movies}
              isLogin={isLogin}
              savedMovies={true}
              isLoading={isLoading}
              loadingError={loadingError}
              movies={filterSavedMovies}
              onSubmitSearch={onSubmitSearchSaved}
              onBookmarkClick={onBookmarkClick}
              isSavedMovie={isSavedMovie}
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
