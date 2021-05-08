import { Link } from "react-router-dom";
import "../Header/Header.css";

function AuthNavigation(isLogin) {
  return (
    <div
      className={
        !isLogin ? "header__auth-container" : "header__auth-container_hidden"
      }
    >
      <Link to="/signup" className="header__account" className="header__signup">
        Регистрация
      </Link>
      <Link to="/signin">
        <button className="header__button">Войти</button>
      </Link>
    </div>
  );
}

export default AuthNavigation;
