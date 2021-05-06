import { Link } from "react-router-dom";
import "../Header/Header.css";

function AuthNavigation() {
  return (
    <div className="header__container">
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
