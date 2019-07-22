import config from './config';

export const getFilmsFromApiWithSearchedText = (text, page, genreId) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey}&language=fr&query=${text}&page=${page}`
  return fetch(url)
    .then(async (response) => {
      const films = await response.json()
      if (genreId) {
        return {
          results: films.results.filter((film) => film.genre_ids.includes(genreId))
        }
      }
      return films
    })
    .catch((error) => console.error(error))
}

export const getPopularMovies = (page, genreId) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}&language=fr&sort_by=popularity.desc&page=${page}&with_genres=${genreId ? genreId : ''}`
  // const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' + config.apiKey + '&language=fr&sort_by=popularity.desc&page=' + page + 'with_genres' + genreId
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export const getImageFromApi = (name) => {
  return config.apiUrlImage + name
}

export const getFilmDetailFromApi = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.apiKey}&language=fr`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export const getGenresFromApi = (id) => {
  return fetch('https://api.themoviedb.org/3/genre/list?api_key=' + config.apiKey + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
