import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { filterList } from 'src/app/store/main-page.actions';
import { FormBuilder } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-starships-filter',
  templateUrl: './starships-filter.component.html',
  styleUrls: ['./../filter.component.scss']
})
export class StarshipsFilterComponent implements OnInit, OnDestroy {

  form = this.fb.group({
    max_atmosphering_speed: [''],
    passengers: ['']
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
          starships: {
              max_atmosphering_speed: formValues.max_atmosphering_speed,
              passengers: formValues.passengers
          },
          people: null,
          planets: null }}));
    });
  }
}
