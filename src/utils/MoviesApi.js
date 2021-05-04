class MoviesApi {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Получить фильмы
  getMovies() {
    return fetch(`${this._baseUrl}`, {headers: this._headers})
    .then(res => this._checkRequestResult(res));
  }

  _checkRequestResult(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Возникла ошибка: ${response.status}`));
  }

  errorHandler(error) {
    console.log(error);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;
