import { favoriteConstants } from '../constants/favorite.constants';

export const favoriteAction = {
  toggleFavorite,
}
function toggleFavorite(film) {
  return { type: favoriteConstants.TOGGLE_FAVORITE, value: film };
}