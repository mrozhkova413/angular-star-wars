import { MainPageState } from 'src/app/app.component';
import * as MainPageActionsType from './main-page.actions';

import { createReducer, on } from '@ngrx/store';
import { People } from '../swapi/swapi.models';

export const initialState: MainPageState = {selected: null, list: [], filteredList:[] }

export const mainPageReducer = createReducer(
  initialState,
  on(MainPageActionsType.select,
    (state, { id }) =>({...state, selected: state.list.find(x => x.url === id) || null })),
  on(MainPageActionsType.loadListSuccess,
    (state, { list }) => ({...state, list: list, filteredList: list})),
  on(MainPageActionsType.filterList,
    (state, { section, filters }) => {
      let filteredList = state.list.map(x => x as People)
         .filter(
           x => x.hair_color === filters.people?.hairColor && 
           x.eye_color === filters.people?.eyesColor && 
           x.gender === filters.people?.gender)
      return ({...state, filteredList: filteredList });
    })
);
