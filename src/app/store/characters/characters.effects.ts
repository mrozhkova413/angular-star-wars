import { loadListCharacters, loadListCharactersSuccess, loadListCharactersError } from './characters.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharactersService } from './characters.service';
import { of } from 'rxjs';

@Injectable()
export class CharacterEffects {

  loadListCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(loadListCharacters),
    mergeMap(() => this.charactersService.getListCharacters()
      .pipe(
        map(chars => loadListCharactersSuccess( { listCharacters: chars } ) ),
        catchError(() => of(loadListCharactersError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private charactersService: CharactersService
  ) {}
}
