import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { filterList } from 'src/app/store/main-page.actions';
import { eyesColors, hairColors, genders } from '../../../swapi/filter.models'
import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-people-filter',
  templateUrl: './people-filter.component.html',
  styleUrls: ['./../filter.component.scss']
})
export class PeopleFilterComponent implements OnInit, OnDestroy {

  context = {
    hairColors: hairColors,
    eyesColors: eyesColors,
    genders: genders
  };

  form = this.fb.group({
    eyesColor: [''],
    hairColor: [''],
    gender: ['']
  });

  destructionNotifier = new Subject()

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnDestroy(): void {
    this.destructionNotifier.next();
    this.destructionNotifier.complete();
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
        takeUntil(this.destructionNotifier)
      ).subscribe(formValues => {
      this.store.dispatch(filterList({
        filters: {
          people: {
              hairColor: formValues.hairColor,
              eyesColor: formValues.eyesColor,
              gender: formValues.gender },
          planets: null,
          starships: null }}));

    });
  }
}
