import { createAction, props } from '@ngrx/store';
import { Character } from './character.model';

export const select = createAction('[Character] Select', props<{ id: number; }>());
export const loadList = createAction('[Character] Load list', props<{ section: string; }>());
export const loadListSuccess = createAction('[Character] Load list success', props<{ list: Character[]; }>());
export const loadListError = createAction('[Character] Load list error');

