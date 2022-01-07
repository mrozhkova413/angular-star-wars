import { Component, OnInit } from '@angular/core';
import { ALL } from './swapi/swapi.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select, loadList } from './store/main-page.actions';

export interface AppState { root: MainPageState }

export interface MainPageState {
  selected: ALL | null;
  list: ALL[];
  filteredList: ALL[];
}

export type Sections = 'people' | 'starships' | 'planets'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-star-wars';
  selected$: Observable<ALL | null>
  filteredList$: Observable<ALL[]>

  sections: Sections[] = ['people', 'starships', 'planets'];

  constructor(private store: Store<AppState>) {
    this.selected$ = this.store.select(state => state.root.selected);
    this.filteredList$ = this.store.select(state => state.root.filteredList);
  }

  ngOnInit(): void {
    this.store.dispatch(loadList({ sections: this.sections, search: '' }));
  }

  selectCharacter(id: string) {
    this.store.dispatch(select({ id: id }))
  }

  onChange(sections: string[], search: string) {
    this.store.dispatch(loadList({ sections: sections || this.sections, search: search  }));
  }
}
