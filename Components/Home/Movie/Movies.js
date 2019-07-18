import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { connect } from "react-redux";
import MovieItem from './MovieItem';
import { getFilmsFromApiWithSearchedText, getPopularMovies } from '../../../services/TMDBApi';
import { ActivityIndicator } from 'react-native'

const ListView = styled.FlatList`
  padding: 10px;
`;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.page = 0
    this.totalPages = 0
    this.firstLoad = true
    this.state = {
      films: [],
      isLoading: false,
    };
  }

  FormatData = (data, numColumns) => {
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

  _loadFilms = () => {
    const { films } = this.state;
    const { searchText } = this.props;

    if (this.firstLoad) {
      this.setState({
        isLoading: true,
      })
      this.firstLoad= false;
    }

    if (!searchText.length) {
      getPopularMovies(this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [ ...films, ...data.results ],
          isLoading: false,
        })
      })
    } else {
      getFilmsFromApiWithSearchedText(searchText, this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [ ...films, ...data.results ],
          isLoading: false,
        })
      })
    }
  }

  componentDidMount = () => {
    this._loadFilms()
  }

  componentDidUpdate = async (nextProps, nextState) => {
    if (this.props.searchText !== nextProps.searchText) {   
      this.firstLoad= true;
      this.page = 0
      this.totalPages = 0
      await this.setState({
        films: [],
      })
      this._loadFilms()
    }
  }
  
  render () {
    const { films, isLoading } = this.state;
    return (
      isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
        ) : (
        <ListView
          data={this.FormatData(films, 2)}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <MovieItem movie={item}/>}
          numColumns={2}
          onEndReachedThreshold={0.8}
          onEndReached={(info) => {
            if (this.page < this.totalPages) {
              this._loadFilms()
            }
          }}
        />
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    searchText: state.searchText.searchText
  }
}

export default connect(
  mapStateToProps,
)(Movie);