import { Component, OnInit } from '@angular/core';
import { ALL } from './swapi/swapi.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select, loadList, filterList } from './store/main-page.actions';

export interface AppState { root: MainPageState }

export interface MainPageState {
  selected: ALL | null;
  list: ALL[];
  filteredList: ALL[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-star-wars';
  selected$: Observable<ALL | null>
  filteredList$: Observable<ALL[]>

  sections: string[] = ['people', 'starships', 'planets'];
  hairColors: string[] = ['brown', 'blond', 'gray', 'black'];
  eyesColors: string[] = ['brown', 'red', 'blue', 'yellow'];

  constructor(private store: Store<AppState>) {
    this.selected$ = this.store.select(state => state.root.selected);
    this.filteredList$ = this.store.select(state => state.root.filteredList);
  }

  ngOnInit(): void {
    this.store.dispatch(loadList({ sections: this.sections, search: '' }));
  }

  selectCharacter(id: number) {
    this.store.dispatch(select({ id: id }))
  }

  onChange(sections: string[], search: string) {
    this.store.dispatch(loadList({ sections: sections ? sections : this.sections, search: search  }));
  }

  onFilterChange(hair: string, eyes: string) {
    this.store.dispatch(filterList({ hairColor: hair, eyesColor: eyes  }));
  }
}
