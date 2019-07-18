import { genreSelectedConstants } from '../constants/genreSelected.constants';

const initialState = {
  selectedId: 0,
};

export function genreSelected(state = initialState, action) {
  switch (action.type) {
    case genreSelectedConstants.UPDATE_SELECTED_GENRE_ID:
      return {
        ...state,
        selectedId: action.id,
      }
    default:
      return state;
  }
}