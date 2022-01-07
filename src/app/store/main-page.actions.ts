import { createAction, props } from '@ngrx/store';
import { ALL } from '../swapi/swapi.models';

export const select = createAction('[Main Page] Select', props<{ id: string; }>());
export const loadList = createAction('[Main Page] Load list', props<{ sections: string[]; search: string }>());
export const loadListSuccess = createAction('[Main Page] Load list success', props<{ list: ALL[]; }>());
export const loadListError = createAction('[Main Page] Load list error');
export const filterList = createAction('[Main Page] Filter list', props<{ hairColor: string; eyesColor: string }>());

