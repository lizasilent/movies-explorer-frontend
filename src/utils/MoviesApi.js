export class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRequestResult(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Возникла ошибка: ${response.status}`));
  }

  // Получить фильмы
 getAllMovies() {
    return fetch(`${this._baseUrl}`, { headers: this._headers }).then((res) =>
      this._checkRequestResult(res)
    );
  }

  errorHandler(error) {
    console.log(error);
  }
}

const apiMovies = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiMovies;
