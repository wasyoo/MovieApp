import React from 'react';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { MovieItemView, MovieItemTitle, Cover, Image, FavoriteIcon } from './ListViewStyles';
import MovieRating from '../Core/Rating/MovieRating';
import { getImageFromApi } from '../../services/TMDBApi';

function ListViewItem({movie, navigation, isFilmFavorite}) {
  return (
    <MovieItemView
      empty={movie.empty && movie.empty}
      disabled={movie.empty && movie.empty}
      onPress={() => navigation.navigate("FilmDetails", { idFilm: movie.id})}  
    >
      <Cover>
        <Image source={{ uri: getImageFromApi(movie.poster_path)}}/>
      </Cover>
      {
        isFilmFavorite && (
          <FavoriteIcon
            source={require('../../assets/favorite-full.png')}
          />
        )
      }
      <MovieItemTitle numberOfLines={1}>{movie.title}</MovieItemTitle>
      <MovieRating rating={movie.vote_average ? Math.round(movie.vote_average / 2) : 0}/>
      <MovieItemTitle>{moment(new Date(movie.release_date)).format('YYYY')}</MovieItemTitle>
    </MovieItemView>
  )
}

export default withNavigation(ListViewItem);