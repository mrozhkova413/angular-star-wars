import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Sections } from 'src/app/app.component';
import { filterList } from 'src/app/store/main-page.actions';
import { HairColor, EyesColor, Gender } from './filter.models'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() section: Sections;

  hairColors: HairColor[] = ['brown', 'blond', 'gray', 'black'];
  eyesColors: EyesColor[] = ['brown', 'red', 'blue', 'yellow'];
  genders: Gender[] = ['female', 'male'];
  
  peopleForm = this.fb.group({
    eyesColor: [''],
    hairColor: [''],
    gender: ['']
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onFilterChange() {
    let form = this.peopleForm
    this.store.dispatch(filterList({ 
      section: 'people', 
      filters: { 
        people: { 
            hairColor: form.get('hairColor')?.value, 
            eyesColor: form.get('eyesColor')?.value, 
            gender: form.get('gender')?.value }, 
        planets: null }}));
  }
}
