import { createAction, props } from '@ngrx/store';
import { Character } from './character.model';

export const selectCharacter = createAction('[Character] Select character', props<{ id: number; }>());
export const loadListCharacters = createAction('[Character] Load list of characters', props<{ section: string; }>());
export const loadListCharactersSuccess = createAction('[Character] Load list of characters success', props<{ list: Character[]; }>());
export const loadListCharactersError = createAction('[Character] Load list of characters error');

