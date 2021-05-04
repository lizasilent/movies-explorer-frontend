import React from "react";
import "./MoviesCard.css";
import testpic from "../../images/testpic.png";

function MoviesCard() {
  return (
    <>
      <li className="grid__item">
        <img src={testpic} alt="изображение фильма" className="grid__image" />
        <div className="grid__text-container">
          <div className="grid__name-block">
            <p className="grid__text">33 слова о дизайне</p>
            <button
              className="grid__save-btn grid__save-btn_saved"
              type="button"
            />
          </div>
          <p className="grid__duration">33 hours</p>
        </div>
      </li>
      <li className="grid__item">
        <img src={testpic} alt="изображение фильма" className="grid__image" />
        <div className="grid__text-container">
          <div className="grid__name-block">
            <p className="grid__text">33 слова о дизайне</p>
            <button
              className="grid__save-btn grid__save-btn_saved"
              type="button"
            />
          </div>
          <p className="grid__duration">33 hours</p>
        </div>
      </li>
      <li className="grid__item">
        <img src={testpic} alt="изображение фильма" className="grid__image" />
        <div className="grid__text-container">
          <div className="grid__name-block">
            <p className="grid__text">33 слова о дизайне</p>
            <button
              className="grid__save-btn grid__save-btn_saved"
              type="button"
            />
          </div>
          <p className="grid__duration">33 hours</p>
        </div>
      </li>
      <li className="grid__item">
        <img src={testpic} alt="изображение фильма" className="grid__image" />
        <div className="grid__text-container">
          <div className="grid__name-block">
            <p className="grid__text">33 слова о дизайне</p>
            <button
              className="grid__save-btn grid__save-btn_saved"
              type="button"
            />
          </div>
          <p className="grid__duration">33 hours</p>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
