import React from 'react';
import "./NotFoundPage.css";

function NotFoundPage() {
  return(
<div>
          <div className="not-found-page">
            <p className="not-found-page__header"> 404 </p>
            <p className="not-found-page__text"> Страница не найдена</p>
            <a href="#" className="not-found-page__link">
              {" "}
              Назад{" "}
            </a>
          </div>
        </div>
  )
}

export default NotFoundPage;
