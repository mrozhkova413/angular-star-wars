import { CharactersState } from 'src/app/app.component';
import * as CharactersActionsType from './characters.actions';

import { createReducer, on } from '@ngrx/store';

export const initialState: CharactersState = {selectedCharacter: null, listCharacters: []}

export const charactersReducer = createReducer(
  initialState,
  on(CharactersActionsType.selectCharacter,
    (state, { id }) =>({...state, selectedCharacter: state.listCharacters[id]})),
  on(CharactersActionsType.loadListCharactersSuccess,
    (state, { listCharacters }) => ({...state, listCharacters: listCharacters}))
);

