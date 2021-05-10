import React from "react";
import "./More.css";

function More(handleMoreCards) {
  return (
    <div className="more">
      <button className="more__button" type="button" onClick={handleMoreCards}>
        Еще
      </button>
    </div>
  );
}

export default More;
