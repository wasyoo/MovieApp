import { searchTextConstants } from '../constants/SearchText.constants';

export const searchTextAction = {
  updateSearchText,
}
function updateSearchText(text) {
  return { type: searchTextConstants.UPDATE_TEXT, text };
}