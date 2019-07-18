import { combineReducers } from 'redux';
import { searchText } from './SearchText';
import { genreSelected } from './genreSelected';

export default combineReducers({
  searchText,
  genreSelected,
});
