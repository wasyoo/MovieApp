import React, { Component } from 'react';
import { connect } from "react-redux";
import { getFilmsFromApiWithSearchedText, getPopularMovies } from '../../../services/TMDBApi';
import { ActivityIndicator } from 'react-native';
import ListViewMovies from '../../ListView';

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

  _loadFilms = () => {
    const { films } = this.state;
    const { searchText, genreSelected } = this.props;

    if (this.firstLoad) {
      this.setState({
        isLoading: true,
      })
      this.firstLoad= false;
    }

    if (!searchText.length) {
      getPopularMovies(this.page+1, genreSelected).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [ ...films, ...data.results ],
          isLoading: false,
        })
      })
    } else {
      getFilmsFromApiWithSearchedText(searchText, this.page+1, genreSelected).then(data => {
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
    if (this.props.searchText !== nextProps.searchText || this.props.genreSelected !== nextProps.genreSelected) {   
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
        <ActivityIndicator style={{marginTop: 100}} size="large" color="#fff" />
      ) : (
        <ListViewMovies
          data={films}
          _loadFilms={() => {
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
    searchText: state.searchText.searchText,
    genreSelected: state.genreSelected.selectedId
  }
}

export default connect(
  mapStateToProps,
)(Movie);