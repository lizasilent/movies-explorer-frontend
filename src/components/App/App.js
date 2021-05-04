import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import mainApi from '../../utils/MainApi.js';
import moviesApi from "../../utils/MoviesApi.js";


function App() {

  // const history = useHistory();
  // const [loggedIn, setLoggedIn] = React.useState(false);
  // const [cards, setCards] = React.useState([]);
  // const [email, setEmail] = React.useState('');


  // React.useEffect(() => {
  //   const jwt = localStorage.getItem('jwt');
  //   if (jwt) {
  //     mainApi.getContent(jwt)
  //       .then((res) => {
  //         setLoggedIn(true);
  //         setEmail(res.data.email);
  //         history.push('/');
  //       })
  //       .catch(err => console.log(err));
  //   }
  // }, [history]);

  // const handleLogin = (email, password) => {
  //   mainApi.authorize(email, password)
  //   .then(() =>
  //   {
  //       setEmail(email);
  //       setLoggedIn(true);
  //       history.push('/');
  //     })
  //     .catch((err) => console.log(err));

  // }

  // const handleRegister = (email, password, name) => {
  //   mainApi.register(email, password, name)
  //   .then((res) => {
  //     if (res.status === 201 || res.status === 200) {
  //       history.push('/sign-in');
  //   }

  //   if (res.status === 400) {
  //     console.log("Такой email уже существует")
  //   }
  // }).catch((err) => {
  // console.log("Ошибка регистрации: " + err);
  // })}

  // const handleLogout = () => {

  //   setLoggedIn(false);
  //   localStorage.removeItem('jwt');
  //   setEmail('');
  //   history.push('/sign-in');
  // }

  // // Стейт, отвечающий за данные текущего пользователя
  // const [currentUser, setCurrentUser] = React.useState({});

  //   React.useEffect(() => {
  //     mainApi.getUserData().then((user) => setCurrentUser(user.data))
  //     .catch((err) => {
  //         console.log("Не загрузился юзер: " + err);
  //     });
  //   }, []);

  // //Карточки с фильмами
  // React.useEffect(() => {

  //   moviesApi.getInitialMovies().then(moviesList => setCards(moviesList)
  //     ).catch((err) => {
  //         console.log("Не загрузились карточки фильмов: " + err);
  //     });
  //   }, []);






  return (
    <div className="page">
      <div className="page__content">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies" exact>
          <Header />
          <Movies cards={cards} />
          <Footer />
        </Route>
        <Route path="/saved-movies" exact>
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/profile" exact>
          <Header />
          <Profile />
        </Route>
        <Route path="/signin" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Register />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
