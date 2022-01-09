import { MainPageState } from 'src/app/app.component';
import * as MainPageActionsType from './main-page.actions';

import { createReducer, on } from '@ngrx/store';
import { People, Planet, ALL, Starship } from '../swapi/swapi.models';
import { Filters } from '../swapi/filter.models';

export const initialState: MainPageState = {selected: null, list: [], filteredList:[], filters: null, selectedSections: [] }

export const mainPageReducer = createReducer(
  initialState,
  on(MainPageActionsType.select,
    (state, { id }) =>({...state, selected: state.list.find(x => x.url === id) || null })),
  on(MainPageActionsType.selectSection,
      (state, { sections }) =>({...state, selectedSections: sections })),
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

  if (filters.starships) {
    let fil = filters.starships;
    return list.map(x => x as Starship).filter(
      x => ((fil.max_atmosphering_speed || x.max_atmosphering_speed !== 'n/a') ? Number(x.max_atmosphering_speed) >= fil.max_atmosphering_speed : true) &&
      ((fil.passengers || x.passengers !== 'n/a') ? Number(x.passengers) >= fil.passengers : true));
  }

  return list;
}
