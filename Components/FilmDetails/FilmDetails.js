import React, { Component } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { connect } from "react-redux";
import { View, ActivityIndicator, Text } from 'react-native';
import { favoriteAction } from '../../actions/favorite';
import { getFilmDetailFromApi, getImageFromApi } from '../../services/TMDBApi';
import { Image, DefaultText, DescriptionText, FilmDetailsContainer, ScrollView, FavoriteIcon, FavTouchableOpacity } from './FilmDetailsStyles';

class FilmDetails extends Component {
  state = {
    film: undefined,
    isLoading: true,
  }

  componentWillMount = () => {
    const { idFilm } = this.props.navigation.state.params;
    getFilmDetailFromApi(idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFavoriteImage() {
    const { favoritesFilm } = this.props;
    var sourceImage = require('../../assets/favorite.png')
    if (favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1) {
      sourceImage = require('../../assets/favorite-full.png')
    }
    return (
      <FavoriteIcon
        source={sourceImage}
      />
    )
  }

  _toggleFavorite = () => {
    const { dispatch } = this.props;
    const { film } = this.state;
    dispatch(favoriteAction.toggleFavorite(film))
  } 

  _displayFilm() {
    const { film } = this.state;
    if (film != undefined) {
      return (
        <ScrollView>
          <Image source={{uri: getImageFromApi(film.backdrop_path)}} />
          <FavTouchableOpacity
            onPress={() => this._toggleFavorite()}>
            {this._displayFavoriteImage()}
          </FavTouchableOpacity>
          <DefaultText big>{film.title}</DefaultText>
          <DescriptionText>{film.overview}</DescriptionText>
          <DefaultText>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</DefaultText>
          <DefaultText>Note : {film.vote_average} / 10</DefaultText>
          <DefaultText>Nombre de votes : {film.vote_count}</DefaultText>
          <DefaultText>Budget : {numeral(film.budget).format('0,0[.]00 $')}</DefaultText>
          <DefaultText>Genre(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </DefaultText>
          <DefaultText>Companie(s) : {film.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </DefaultText>
        </ScrollView>
      )
    }
  }

  render () {
    return (
      <FilmDetailsContainer>
        {this._displayLoading()}
        {this._displayFilm()}
      </FilmDetailsContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favorite.favoritesFilm,
  }
}

export default connect(
  mapStateToProps,
)(FilmDetails);