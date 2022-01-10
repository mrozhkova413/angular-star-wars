import { climate, Climate } from './../../swapi/filter.models';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { filterList } from 'src/app/store/main-page.actions';
import { HairColor, EyesColor, Gender, eyesColors, hairColors, genders, Sections, terrains, Terrain } from '../../swapi/filter.models'
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() section: Sections;

  hairColors: HairColor[] = hairColors;
  eyesColors: EyesColor[] = eyesColors;
  genders: Gender[] = genders;

  terrains: Terrain[] = terrains
  climate: Climate[] = climate

  form: FormGroup

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
    switch (this.section) {
      case 'people':
        this.form =  this.fb.group({
          eyesColor: [''],
          hairColor: [''],
          gender: ['']
        });

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
        break;

      case 'planets':
        this.form =  this.fb.group({
          terrain: [''],
          climate: [''],
          rotation_period: ['']
        });

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
        break;

      case 'starships':
        this.form = this.fb.group({
          max_atmosphering_speed: [''],
          passengers: ['']
        });

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
        break;
    }
  }
}
