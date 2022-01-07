import { MainPageState } from 'src/app/app.component';
import * as MainPageActionsType from './main-page.actions';

import { createReducer, on } from '@ngrx/store';
import { People } from '../swapi/swapi.models';

export const initialState: MainPageState = {selected: null, list: [], filteredList:[] }

export const mainPageReducer = createReducer(
  initialState,
  on(MainPageActionsType.select,
    (state, { id }) =>({...state, selected: state.list[id]})),
  on(MainPageActionsType.loadListSuccess,
    (state, { list }) => ({...state, list: list, filteredList: list})),
  on(MainPageActionsType.filterList,
    (state, { hairColor, eyesColor }) => {
      let filteredList = state.list.map(x => x as People).filter(x => x.hair_color === hairColor && x.eye_color === eyesColor)
      return ({...state, filteredList: filteredList });
    })
);
