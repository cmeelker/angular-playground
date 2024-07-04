import { createAction, props } from '@ngrx/store';

export const toggleFavoriteAction = createAction(
  '[Product Card] Toggle Favorite',
  props<{ productId: string }>()
);
