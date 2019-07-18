import config from './config';

export const getFilmsFromApiWithSearchedText = (text, page) => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + config.apiKey + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export const getPopularMovies = (page) => {
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + config.apiKey + '&language=fr&sort_by=popularity.desc&page=' + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export const getImageFromApi = (name) => {
  return config.apiUrlImage + name
}

export const getFilmDetailFromApi = (id) => {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + config.apiKey + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export const getGenresFromApi = (id) => {
  return fetch('https://api.themoviedb.org/3/genre/list?api_key=' + config.apiKey + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export const getMoviesByGenre = (text, genre, page) => {
  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + config.apiKey + '&language=fr&sort_by=popularity.desc&page=' + page + '&with_genres=28'

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
