import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
import MainApi from '../../utils/MainApi.js';
import CurrentUserContext from '../../context/CurrentUserContext';


function App() {

  const history = useHistory();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLogin, setIsLogin] = React.useState(false);
  const [isEditDone, setIsEditDone] = React.useState(false);

  // Ошибки логина, регистрации и редактирования инфы
  const [loginError, setLoginError] = React.useState(false);
  const [isEditError, setIsEditError] = React.useState(false);
  const [registrationError, setRegisteredError] = React.useState(false);


  function isLoggedInCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      MainApi.getInfo()
      .then(userInfo=>{
        if(userInfo) {
          setCurrentUser(userInfo.data);
          setIsLogin(true);
        }
      })
      .catch(err => {
        console.log(err)
      })

    }
  };

  React.useEffect(() => {
    isLoggedInCheck();
  }, []);

  React.useEffect(() => {
    if(isLogin) {
      MainApi.getInfo()
        .then(userInfo=>{
          if(userInfo) {
            setCurrentUser(userInfo.data);
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }, []);

  function handleLogin(email,password) {
    MainApi.login(email, password)
      .then((data) => {
        if (data) {
          setIsLogin(true);
          history.push("/movies");
        }
      })
      .catch(err=>{
        setLoginError(true);
        console.log(err);
      });

  };

  function handleRegister(email, password, name) {
    MainApi.register(email, password, name)
      .then(data => {
        if(data) {
          handleLogin(email,password);
          history.push("/signin");
        }
      })
      .catch(() => {
        setRegisteredError(true);
      });
  };

  function handleLogout() {
      history.push('/');
      setIsLogin(false);
      localStorage.clear();
  };

  function editProfile(name, email) {

    MainApi.setInfo(name, email)
      .then((info) => {
      setCurrentUser(info);
      setIsEditDone(true);
      setIsEditError(false);
      setTimeout(()=>{
        setIsEditDone(false);
      }, 4000);
    })
    .catch(() => {
      setIsEditError(true);
    })
  };


  return (
    <div className="page">
      <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>
      <Route path="/" exact>
            <Header isLogin={isLogin} handleLogout={handleLogout} />
            <Main />
            <Footer />
            </Route>
      {isLogin && (
          <ProtectedRoute
            path="/movies"
            exact
            component={Movies}
            isLogin={isLogin}
            currentUser={currentUser}
          />
)}
          {isLogin && (
          <ProtectedRoute
            path="/saved-movies"
            exact
            component={Movies}
            isLogin={isLogin}
            currentUser={currentUser}
          />
)}
          {isLogin && (
          <ProtectedRoute
            path="/profile"
            exact
            component={Profile}
            handleLogout={handleLogout}
            editProfile={editProfile}
            isLogin={isLogin}
            currentUser={currentUser}
            isEditError={isEditError}
            isEditDone={isEditDone}
          />
)}
          <Route path="/signin" exact>
            <Login handleLogin={handleLogin} loginError={loginError} />
          </Route>
          <Route path="/signup" exact>
            <Register handleRegister={handleRegister} registrationError={registrationError} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>

      </Switch>
      </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
