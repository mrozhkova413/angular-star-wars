import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { filterList } from 'src/app/store/main-page.actions';
import { HairColor, EyesColor, Gender } from './filter.models'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  hairColors: HairColor[] = ['brown', 'blond', 'gray', 'black'];
  eyesColors: EyesColor[] = ['brown', 'red', 'blue', 'yellow'];
  genders: Gender[] = ['female', 'male'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onFilterChange(hair: HairColor, eyes: EyesColor, gender: Gender) {
    this.store.dispatch(filterList({ section: 'people', filters: { people: {hairColor: hair, eyesColor: eyes, gender: gender}, planets: null }}));
  }
}
