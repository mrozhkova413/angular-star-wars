import { climate, Climate } from './../../swapi/filter.models';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { filterList } from 'src/app/store/main-page.actions';
import { HairColor, EyesColor, Gender, eyesColors, hairColors, genders, Sections, terrains, Terrain } from '../../swapi/filter.models'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() section: Sections;

  hairColors: HairColor[] = hairColors;
  eyesColors: EyesColor[] = eyesColors;
  genders: Gender[] = genders;

  terrains: Terrain[] = terrains
  climate: Climate[] = climate

  peopleForm = this.fb.group({
    eyesColor: [''],
    hairColor: [''],
    gender: ['']
  });

  planetsForm = this.fb.group({
    terrain: [''],
    climate: [''],
    rotation_period: ['']
  });

  starshipsForm = this.fb.group({
    max_atmosphering_speed: [''],
    passengers: ['']
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.peopleForm.valueChanges.subscribe(formValues => {
      this.store.dispatch(filterList({
        filters: {
          people: {
              hairColor: formValues.hairColor.value,
              eyesColor: formValues.eyesColor.value,
              gender: formValues.gender.value },
          planets: null,
          starships: null }}));

    });

    this.planetsForm.valueChanges.subscribe(formValues => {
      this.store.dispatch(filterList({
        filters: {
          planets: {
              terrain: formValues.terrain.value,
              climate: formValues.climate.value,
              rotation_period: formValues.rotation_period.value },
          people: null,
          starships: null }}));
    });

    this.starshipsForm.valueChanges.subscribe(formValues => {
      this.store.dispatch(filterList({
        filters: {
          starships: {
              max_atmosphering_speed: formValues.max_atmosphering_speed.value,
              passengers: formValues.passengers.value
          },
          people: null,
          planets: null }}));
    });
  }
}
