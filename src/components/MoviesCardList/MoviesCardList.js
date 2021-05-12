/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ savedMovies, movies, onBookmarkClick, isSavedMovie }) {

  const [extraPortion, setExtraPortion] = React.useState(3);
  const [currentCount, setCurrentCount] = React.useState(0);
  const [renderMovies, setRenderMovies] = React.useState([]);

  function getCount(windowSize) {
    if (windowSize > 768 ) {
      return {first: 12, extra: 3}
    } else if (windowSize > 480 && windowSize <= 768) {
      return {first: 8, extra: 2}
    } else {
      return {first: 5, extra: 2}
    }
  }

  function renderExtraPortion() {
    const count = Math.min(movies.length,currentCount+extraPortion);
    const extraMovies = movies.slice(currentCount,count)
    setRenderMovies([...renderMovies, ...extraMovies]);
    setCurrentCount(count);
  }

  function handleResize() {
    const windowSize = window.innerWidth;
    const sizePortion = getCount(windowSize);
    setExtraPortion(sizePortion.extra);
  }

  React.useEffect(() => {

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  },[]);

  React.useEffect(() => {
    const windowSize = window.innerWidth;
    const sizePortion = getCount(windowSize);
    setExtraPortion(sizePortion.extra);
    const count = Math.min(movies.length,sizePortion.first);
    setRenderMovies(movies.slice(0,count));
    setCurrentCount(count);
  }, [movies])

  function handleMoreCards() {
    renderExtraPortion();
  }

  return (
    <>
    <div className="grid">
      <ul className="grid__template">
      {

renderMovies.map((movie) => (
  <MoviesCard
    savedMovies={savedMovies}
    key={movie.id}
    movie={movie}
    onBookmarkClick={onBookmarkClick}
    isSavedMovie={isSavedMovie}
  />
))
}
      </ul>
    </div>
    { currentCount < movies.length &&
     <div className="more">
      <button className="more__button" type="button" onClick={handleMoreCards}>
        Еще
      </button>
    </div>  }

       </>
  );
}

export default MoviesCardList;
