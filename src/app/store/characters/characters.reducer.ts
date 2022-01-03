import { MainPageState } from 'src/app/app.component';
import * as CharactersActionsType from './characters.actions';

import { createReducer, on } from '@ngrx/store';

export const initialState: MainPageState = {selected: null, list: []}

export const charactersReducer = createReducer(
  initialState,
  on(CharactersActionsType.selectCharacter,
    (state, { id }) =>({...state, selected: state.list[id]})),
  on(CharactersActionsType.loadListCharactersSuccess,
    (state, { list }) => ({...state, list: list}))
);

