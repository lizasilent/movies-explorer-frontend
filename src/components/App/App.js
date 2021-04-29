import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import Movies from "../Movies/Movies.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Movies />
        <Login />
        <Register />
        <Profile />
        <NotFoundPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
