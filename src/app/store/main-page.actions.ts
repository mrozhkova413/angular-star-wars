import { createAction, props } from '@ngrx/store';
import { People } from '../api/api.models';

export const select = createAction('[Main Page] Select', props<{ id: number; }>());
export const loadList = createAction('[Main Page] Load list', props<{ section: string; search: string }>());
export const loadListSuccess = createAction('[Main Page] Load list success', props<{ list: People[]; }>());
export const loadListError = createAction('[Main Page] Load list error');

