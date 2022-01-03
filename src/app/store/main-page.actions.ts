import { createAction, props } from '@ngrx/store';
import { Character } from '../app.models';

export const select = createAction('[Main Page] Select', props<{ id: number; }>());
export const loadList = createAction('[Main Page] Load list', props<{ section: string; }>());
export const loadListSuccess = createAction('[Main Page] Load list success', props<{ list: Character[]; }>());
export const loadListError = createAction('[Main Page] Load list error');

