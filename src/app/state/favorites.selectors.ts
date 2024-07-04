import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoriteState } from './favorites.reducer';

export const selectFavoritesState =
  createFeatureSelector<FavoriteState>('favorites');

export const selectIsFavorite = (productId: string) =>
  createSelector(selectFavoritesState, (favoriteState: FavoriteState) =>
    favoriteState.favoriteProducts.includes(productId)
  );
