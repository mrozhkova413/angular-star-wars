import { createAction, props } from '@ngrx/store';

export const selectCharacter = createAction(
  '[Character] Select character',
  props<{ id: number; }>()
);
