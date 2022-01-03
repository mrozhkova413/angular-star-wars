import { loadList, loadListSuccess, loadListError } from './characters.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MainPageService } from './characters.service';
import { of } from 'rxjs';

@Injectable()
export class CharacterEffects {

  loadListCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(loadList),
    mergeMap((action) => this.mainPageService.getList(action.section)
      .pipe(
        map(chars => loadListSuccess( { list: chars } ) ),
        catchError(() => of(loadListError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private mainPageService: MainPageService
  ) {}
}
