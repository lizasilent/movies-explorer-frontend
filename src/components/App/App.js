/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import * as apiMovies from "../../utils/MoviesApi";
import * as apiMain from "../../utils/MainApi";

function App() {
  const history = useHistory();

  const [isLogin, setIsLoggedIn] = React.useState(false); // статус логина
  const [token, setToken] = React.useState(""); // установка токена
  const [isLoading, setIsLoading] = React.useState(false); // проверка статуса загрузки карточек
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({ name: "", email: "" }); // данные юзера
  const [registrationError, setRegisteredError] = React.useState(false); // ошибка регистрации
  const [loginError, setLoginError] = React.useState(false); // ошибка логина
  const [isEditError, setIsEditError] = React.useState(false); // ошибка обновления информации юзера
  const [isEditDone, setIsEditDone] = React.useState(false); // подтверждение обновления информации юзера

  // Логин
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  React.useEffect(() => {
    tokenChecking();
    // getUserAndMovies()
  }, [isLogin]);

  function handleLoggedIn(email, password) {
    apiMain
      .login(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setToken(data.token);
        handleLogin();
        history.push("/movies");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
        setLoginError(true);

        // if (err.status === 400) {
        //   console.log('Не передано одно из полей');
        // } else if (err.status === 401) {
        //   console.log('Пользователь не найден, либо неверно указаны данные.');
        // } else {
        //   console.log(`Ошибка: ${err.status}`);
        // }
        // setInfoMessage(errors(err));
      });
  }

  // регистрация пользователя
  function handleRegister(name, email, password) {
    apiMain
      .register(name, email, password)
      .then((res) => {
        if (res) {
          // setIsLoggedIn(true)
          handleLoggedIn(email, password);
          history.push("/signin");
        }
      })
      .catch(() => {
        setRegisteredError(true);
      });
  }

  // Выход
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  }
  
  // установка и проверка токена
  function tokenChecking() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      apiMain.tokenCheck(jwt).then((res) => {
        if (res) {
          setIsLoggedIn(true);
          history.push("/movies");
        } else {
          console.log("какая-то фигня с твоим токеном");
          // localStorage.removeItem("jwt");
        }
      });
    }
  }

  // function getUserAndMovies() {
  //   if (isLogin) {
  //     const promises = [apiMain.getUserInfo(token), apiMain.getAllMovies(token)]
  //     setIsLoading(true);
  //     Promise.all(promises)
  //       .then((res) => {
  //         const [userInfo, moviesList] = res;
  //         setCurrentUser(userInfo);
  //         localStorage.setItem('saved-movies',JSON.stringify(moviesList));

  //         if (localStorage.getItem('movies') === null) {
  //           localStorage.setItem('movies', JSON.stringify(moviesList));
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //       .finally(() => setIsLoading(false))
  //   }
  // }

  // обновление информации о юзере
  function editProfile({ name, email }) {
    apiMain
      .editProfile({ name, email }, token)
      .then((userData) => {
        console.log(userData);
        setCurrentUser({
          name: userData.data.name,
          email: userData.data.email,
        });
        // setInfoMessage('Данные профиля успешно изменены!');
        // setTimeout(function() {setInfoMessage('')}, 2000)
      }, setIsEditDone(true))
      .catch(() => {
        setIsEditError(true);
      });
  }

  // // получение данных о всех фильмах внешнего сервиса и сохранение массива в localStorage
  // function getMovies() {
  //   setIsLoading(true)
  //   apiMovies.getMovies()
  //     .then((movies) => {
  //       localStorage.setItem('movies', JSON.stringify(movies));
  //     })
  //     .catch(() => {
  //       localStorage.removeItem('movies');
  //       // setResultMessage(errorResultMessage)
  //     })
  //     .finally(() => setIsLoading(false))
  // }

  function devLogincheck() {
    const jwt = localStorage.getItem("jwt");
    console.log(isLogin);
    console.log(jwt);
    console.log(currentUser);

    apiMain.getUserInfo(jwt).then((userData) => {
      console.log(userData);
    });
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
              isEditError={isEditError}
              isEditDone={isEditDone}
              handleLogout={handleLogout}
              editProfile={editProfile}
              currentUser={currentUser}
            />
            <Route exact path="/signin">
              <Login handleLoggedIn={handleLoggedIn} loginError={loginError} />
            </Route>
            <Route exact path="/signup">
              <Register
                handleRegister={handleRegister}
                registrationError={registrationError}
              />
            </Route>
            <Route path="/*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
