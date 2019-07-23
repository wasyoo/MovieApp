import { combineReducers } from 'redux';
import { searchText } from './SearchText';
import { genreSelected } from './genreSelected';
import { favorite } from './favorite';

export default combineReducers({
  searchText,
  genreSelected,
  favorite,
});
