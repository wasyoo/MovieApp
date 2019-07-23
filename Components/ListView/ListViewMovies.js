import React from 'react';
import { connect } from "react-redux";
import { FlatList, Text } from 'react-native';
import styled from 'styled-components';
import ListViewItem from './ListViewItem';
import { ListView, EmptyDataText } from './ListViewStyles';

const numColumns = 2;

const FormatData = (data, numColumns) => {
  const list = [...data];
  const numberOfFullRows = Math.floor(list.length / numColumns)
  let numberOfElementLastRow = list.length - (numberOfFullRows * numColumns)
  while (numberOfElementLastRow !== numColumns && numberOfElementLastRow !== 0) {
    list.push({
      title: numberOfElementLastRow, 
      empty:true})
    numberOfElementLastRow += 1  
  }
  return list;
}

const ListViewMovies = ({data, _loadFilms, favoritesFilm}) =>{
  return data.length ? (
    <ListView
      data={FormatData(data, numColumns)}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <ListViewItem
        movie={item}
        isFilmFavorite={(favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
      />}
      numColumns={numColumns}
      onEndReachedThreshold={0.8}
      onEndReached={()=>_loadFilms()}
    />
  ) :(
    <EmptyDataText>VIDE</EmptyDataText>
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