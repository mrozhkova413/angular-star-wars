import { loadList, loadListSuccess, loadListError } from './main-page.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { SwapiService } from '../swapi/swapi.service';
import { of, combineLatest } from 'rxjs';
import { ALL } from '../swapi/swapi.models';

@Injectable()
export class MainPageEffects {

  loadListCharacters$ = createEffect(() => this.actions$
  .pipe(
    ofType(loadList),
    switchMap((action) => combineLatest(
      action.sections.map(section => this.apiService.getList(section, action.search)))
  )).pipe(
        map(list => loadListSuccess( { list: list.reduce((accumulator, value) => accumulator.concat(value.results), [] as ALL[]) })),
        catchError(() => of(loadListError()))
      )
    );

  constructor(
    private actions$: Actions,
    private apiService: SwapiService
  ) {}
}
