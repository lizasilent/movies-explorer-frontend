/* eslint-disable no-lone-blocks */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import "../AuthNavigation/AuthNavigation";
import mainLogo from "../../images/logo.png";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import MoviesNavigation from "../MoviesNavigation/MoviesNavigation";

function Header({ isLogin, handleLogout }) {
  const jwt = localStorage.getItem("jwt");
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img alt="лого" src={mainLogo} />
        </div>
      </Link>
      {pathname === "/" && !jwt ? <MoviesNavigation /> : <AuthNavigation />}
    </header>
  );
}

export default Header;
