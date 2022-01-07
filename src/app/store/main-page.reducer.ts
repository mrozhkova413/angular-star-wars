import { MainPageState } from 'src/app/app.component';
import * as MainPageActionsType from './main-page.actions';

import { createReducer, on } from '@ngrx/store';
import { People, Planet, ALL } from '../swapi/swapi.models';
import { Filters } from '../swapi/filter.models';
import { first } from 'rxjs/operators';

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
    let fil = filters.people;
    return list.map(x => x as People).filter(
      x => (fil.hairColor ? x.hair_color === fil.hairColor : true) && 
      (fil.eyesColor ? x.eye_color === fil.eyesColor : true) && 
      (fil.gender ? x.gender === fil.gender : true));  
  }

  if (filters.planets) {
    let fil = filters.planets;
    return list.map(x => x as Planet).filter(
      x => (fil.terrain ? x.terrain.includes(fil.terrain) : true) && 
      (fil.climate ? x.climate === fil.climate : true) && 
      (fil.rotation_period ? x.rotation_period >= fil.rotation_period : true)); 
  }
  return list;
}