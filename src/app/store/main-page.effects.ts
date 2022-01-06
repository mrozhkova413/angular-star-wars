import { loadList, loadListSuccess, loadListError } from './main-page.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MainPageService } from './main-page.service';
import { of } from 'rxjs';

@Injectable()
export class MainPageEffects {

  loadListCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(loadList),
    mergeMap((action) => this.mainPageService.getList(action.section, action.search)
      .pipe(
        map(list => loadListSuccess( { list: list.results } ) ),
        catchError(() => of(loadListError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private mainPageService: MainPageService
  ) {}
}
