import { searchTextConstants } from '../constants/SearchText.constants';

const initialState = {
  searchText: '',
};

export function searchText(state = initialState, action) {
  switch (action.type) {
    case searchTextConstants.UPDATE_TEXT:
      return {
        ...state,
        searchText: action.text,
      }
    default:
      return state;
  }
}