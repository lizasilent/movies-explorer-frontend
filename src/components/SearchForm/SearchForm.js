import React from "react";
import "./SearchForm.css";
import searchpic from "../../images/search_icon.png";

function SearchForm({onSubmitSearch, onFilterShort, isLoading}) {

  const [query, setQuery] = React.useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false);

  function handleOnChange(evt) {
    setQuery(evt.target.value);
  }

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onSubmitSearch(query);
  }

  function handleOnChangeFilter(evt) {
    onFilterShort(evt.target.checked);
  }

  React.useEffect(() => {
    setIsSubmitDisabled(query === '');
  }, [query])




  return (
    <div className="search">
      <form className="search__form" onSubmit={handleOnSubmit}>
        <div className="search__left-box">
          <img src={searchpic} alt="иконка поиска" className="search__image" />
          <input
            name="search"
            placeholder="Фильм"
            type="search"
            className="search__input"
            required
            onChange={handleOnChange} disabled={isLoading}
          />
          <button type="submit" className={`search__button ${isSubmitDisabled && 'search__button_disabled'}`} disabled={isSubmitDisabled || isLoading}>
            Найти
          </button>
        </div>
        <div className="search__line"></div>
        <div className="search__right-box">
          <input
            type="checkbox"
            name="toggle"
            id="toggle-button"
            className="switch__toggle-button" onChange={handleOnChangeFilter}
          />
          <label htmlFor="switch__toggle-button" className="switch__text">
            Короткометражки
          </label>
        </div>
      </form>
      <div className="portfolio__line portfolio__line_invisible" />
    </div>
  );
}

export default SearchForm;
