import React, { Component } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { View, ActivityIndicator, Text } from 'react-native';
import { getFilmDetailFromApi, getImageFromApi } from '../../services/TMDBApi';
import { Image, DefaultText, DescriptionText, FilmDetailsContainer, ScrollView } from './FilmDetailsStyles';

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

  _displayFilm() {
    const { film } = this.state;
    if (film != undefined) {
      return (
        <ScrollView>
          <Image source={{uri: getImageFromApi(film.backdrop_path)}} />
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

export default FilmDetails;