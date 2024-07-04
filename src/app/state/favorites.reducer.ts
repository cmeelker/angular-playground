import { createReducer, on } from '@ngrx/store';
import { toggleFavoriteAction } from './favorites.actions';

export interface FavoriteState {
  favoriteProducts: string[];
}

const initialState: FavoriteState = { favoriteProducts: [] };

export const favoritesReducer = createReducer(
  initialState,
  on(toggleFavoriteAction, (state: FavoriteState, action) => ({
    ...state,
    favoriteProducts: state.favoriteProducts.includes(action.productId)
      ? state.favoriteProducts.filter((id) => id !== action.productId)
      : [...state.favoriteProducts, action.productId],
  }))
);
