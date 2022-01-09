import { createAction, props } from '@ngrx/store';
import { ALL } from '../swapi/swapi.models';
import { Filters, Sections } from '../swapi/filter.models';

export const select = createAction('[Main Page] Select', props<{ id: string; }>());
export const loadList = createAction('[Main Page] Load list', props<{ sections: Sections[]; search: string }>());
export const loadListSuccess = createAction('[Main Page] Load list success', props<{ list: ALL[]; }>());
export const filterList = createAction('[Main Page] Filter list', props<{ filters: Filters; }>());

