import { MainPageState } from 'src/app/app.component';
import * as MainPageActionsType from './main-page.actions';

import { createReducer, on } from '@ngrx/store';

export const initialState: MainPageState = {selected: null, list: []}

export const mainPageReducer = createReducer(
  initialState,
  on(MainPageActionsType.select,
    (state, { id }) =>({...state, selected: state.list[id]})),
  on(MainPageActionsType.loadListSuccess,
    (state, { list }) => ({...state, list: list}))
);

