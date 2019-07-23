import React from 'react';
import { connect } from "react-redux";
import { FavoriteContainer } from './FavoriteStyles';
import ListViewMovies from '../ListView'

class Favorites extends React.Component {

  render() {
    const { favoritesFilm } = this.props;
    return (
      <FavoriteContainer>
        <ListViewMovies
          _loadFilms={() => false}
          data={favoritesFilm}
        />
      </FavoriteContainer>
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
)(Favorites);