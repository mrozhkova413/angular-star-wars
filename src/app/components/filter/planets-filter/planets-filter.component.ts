import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { filterList } from 'src/app/store/main-page.actions';
import { terrains, climate } from '../../../swapi/filter.models'
import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-planets-filter',
  templateUrl: './planets-filter.component.html',
  styleUrls: ['./../filter.component.scss']
})
export class PlanetsFilterComponent implements OnInit, OnDestroy {

  context = {
    terrains: terrains,
    climate: climate
  };

  form = this.fb.group({
    terrain: [''],
    climate: [''],
    rotation_period: ['']
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
          planets: {
              terrain: formValues.terrain,
              climate: formValues.climate,
              rotation_period: formValues.rotation_period },
          people: null,
          starships: null }}));
    });
  }
}
