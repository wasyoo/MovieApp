import { genreSelectedConstants } from '../constants/genreSelected.constants';

export const genreSelectedAction = {
  updateGenreSelected,
}
function updateGenreSelected(id) {
  return { type: genreSelectedConstants.UPDATE_SELECTED_GENRE_ID, id };
}