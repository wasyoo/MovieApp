import React, {Component} from 'react';
import { connect } from "react-redux";
import { CategoryView, CategoryScrollView, TextItem } from './CategoryStyles';
import { getGenresFromApi } from '../../../services/TMDBApi';
import { ActivityIndicator } from 'react-native'
import { genreSelectedAction } from '../../../actions/genreSelected';

class Category extends Component{

  state = {
    categories: [],
    isLoading: true,
  }

  componentWillMount = () => {
    getGenresFromApi().then(data => {
      this.setState({
        categories: data.genres,
        isLoading: false
      })
    })
  }

  render () {
    const { movie, selectedId, dispatch } = this.props;
    const { categories, isLoading } = this.state;
    return (
      isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <CategoryView>
          <CategoryScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category) => (
              <TextItem
                key={category.id}
                selected={selectedId === category.id}
                onPress={() => dispatch(genreSelectedAction.updateGenreSelected(selectedId === category.id ? 0 : category.id))}
              >
                {category.name}
              </TextItem> 
            ))}
          </CategoryScrollView>
        </CategoryView>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedId: state.genreSelected.selectedId
  }
}

export default connect(
  mapStateToProps,
)(Category);
