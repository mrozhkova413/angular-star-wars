import { MainPageState } from 'src/app/app.component';
import * as MainPageActionsType from './main-page.actions';

import { createReducer, on } from '@ngrx/store';
import { People, ALL } from '../swapi/swapi.models';
import { Filters, Sections } from '../swapi/filter.models';

export const initialState: MainPageState = {selected: null, list: [], filteredList:[], filters: null }

export const mainPageReducer = createReducer(
  initialState,
  on(MainPageActionsType.select,
    (state, { id }) =>({...state, selected: state.list.find(x => x.url === id) || null })),
  on(MainPageActionsType.loadListSuccess,
    (state, { list }) => ({...state, list: list, filteredList: state.filters ? filterList(list, state.filters) : list })),
  on(MainPageActionsType.filterList,
    (state, { filters }) => {
      return ({...state, filteredList: filters ? filterList(state.list, filters) : state.list, filters: filters });
    })
);

function filterList(list: ALL[], filters: Filters): ALL[] {
  if (filters.people) {
    return list.map(x => x as People).filter(
      x => (filters.people?.hairColor ? x.hair_color === filters.people?.hairColor : true) && 
      (filters.people?.eyesColor ? x.eye_color === filters.people?.eyesColor : true) && 
      (filters.people?.gender ? x.gender === filters.people?.gender : true));  
  }
  return list;
}