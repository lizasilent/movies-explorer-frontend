import React from "react";
import { useHistory, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import AboutProject from "../AboutProject/AboutProject.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import NavTab from "../NavTab/NavTab.js";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        {/* <Main /> */}
        <Switch>
        <Route exact path="/">
          <AboutProject />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route exact path="/techs">
          <Techs />
        </Route>
        <Route exact path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/*">
          <NotFoundPage />
        </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
