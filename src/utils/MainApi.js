class MainApi {
  constructor({baseUrl, headers}){
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(response => this._checkRequestResult(response));
  }

  setInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      })
    })
    .then(response => this._checkRequestResult(response));
  }


  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
    .then(response => this._checkRequestResult(response));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({email, password})})
      .then(response => this._checkRequestResult(response))
      .then(data => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          this.updateHeaders();
          return data.token;
        } return Promise.reject(new Error(`Возникла ошибка: ${data.status}`));
      })
  }

  logout() {
    return fetch(`${this._baseUrl}/signout `, {
      method: 'POST',
      headers: this._headers,
    })
    .then(response => this._checkRequestResult(response));
  }

  
  updateHeaders() {
    this._headers = {
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('jwt')}`,
    }
  }

  getSavedMovies(){
    return fetch(`${this._baseUrl}/movies`, {headers: this._headers})
    .then(response => this._checkRequestResult(response));
  }

  addMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`
      })
    })
    .then(response => this._checkRequestResult(response));
  }

  removeMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(response => this._checkRequestResult(response));
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

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.lizasilent.nomoredomains.monster/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.getItem('jwt')}`
  }
});

export default mainApi;
