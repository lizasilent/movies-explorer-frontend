/* eslint-disable no-lone-blocks */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import "../AuthNavigation/AuthNavigation";
import mainLogo from "../../images/logo.png";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";

function Header({ isLogin }) {
  const location = useLocation().pathname;

  console.log(isLogin)

  return (
    <header className={location === "/" ? "header" : "header header_white"}>
      <Link to="/">
        <div className="header__logo">
          <img alt="лого" src={mainLogo} />
        </div>
      </Link>
      {isLogin ? <MoviesNavigation /> : <AuthNavigation />}

    </header>
  );
}

export default Header;
