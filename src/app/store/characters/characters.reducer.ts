import { AppState } from 'src/app/app.component';
import * as CharactersActionsType from './characters.actions';

import { createReducer, on } from '@ngrx/store';
import { Character } from './character.model';

let list: Character[] = [
  {id: 0, name: 'name0', planet: 'planet0'},
  {id: 1, name: 'name1', planet: 'planet1'},
  {id: 2, name: 'name2', planet: 'planet2'},
  {id: 3, name: 'name3', planet: 'planet3'},
];

export const initialState: AppState = {character: null, listCharacters: []}

export const charactersReducer = createReducer(
  initialState,
  on(CharactersActionsType.selectCharacter,
    (state, { id }) => ({...state, character: list[id]})),
  on(CharactersActionsType.loadListCharactersSuccess,
    (state, { listCharacters }) => ({...state, listCharacters: listCharacters}))
);

