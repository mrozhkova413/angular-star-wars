import { AppState } from 'src/app/app.component';
import * as CharactersActionsType from './characters.actions';

import { createReducer, on } from '@ngrx/store';

export const initialState: AppState = {root: {selectedCharacter: null, listCharacters: []}}

export const charactersReducer = createReducer(
  initialState,
  on(CharactersActionsType.selectCharacter,
    (state, { id }) => {
      console.log(state.root);
      console.log(state.root.listCharacters)
      console.log(state.root.listCharacters[id])
      return ({...state, selectedCharacter: state.root.listCharacters[id]})
    }),
  on(CharactersActionsType.loadListCharactersSuccess,
    (state, { listCharacters }) => {
      console.log(state.root);
      console.log(state.root.listCharacters)
      return ({...state, listCharacters: listCharacters})
    })
);

