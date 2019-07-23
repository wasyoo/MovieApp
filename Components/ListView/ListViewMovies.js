import React from 'react';
import { connect } from "react-redux";
import { FlatList } from 'react-native';
import styled from 'styled-components';
import ListViewItem from './ListViewItem';

const ListView = styled.FlatList`
  padding: 10px;
`;

const FormatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns)
  let numberOfElementLastRow = data.length - (numberOfFullRows * numColumns)
  while (numberOfElementLastRow !== numColumns && numberOfElementLastRow !== 0) {
    data.push({
      title: numberOfElementLastRow, 
      empty:true})
    numberOfElementLastRow += 1  
  }
  return data;
}

const ListViewMovies = ({data, _loadFilms, favoritesFilm}) =>{
  return (
    <ListView
    data={FormatData(data, 2)}
    keyExtractor={(item) => String(item.id)}
    renderItem={({item}) => <ListViewItem
    movie={item}
    isFilmFavorite={(favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
    />}
      numColumns={2}
      onEndReachedThreshold={0.8}
      onEndReached={()=>_loadFilms()}
    />
  )
}

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favorite.favoritesFilm,
  }
}

export default connect(
  mapStateToProps,
)(ListViewMovies);