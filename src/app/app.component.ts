import { Component, OnInit } from '@angular/core';
import { ALL } from './swapi/swapi.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadList, select } from './store/main-page.actions';
import { sections, Sections, Filters } from './swapi/filter.models';

export interface AppState { root: MainPageState }

export interface MainPageState {
  selected: ALL | null;
  list: ALL[];
  filteredList: ALL[];
  filters: Filters | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-star-wars';
  selected$: Observable<ALL | null>
  filteredList$: Observable<ALL[]>

  sections: Sections[] = sections;

  constructor(private store: Store<AppState>) {
    this.selected$ = this.store.select(state => state.root.selected);
    this.filteredList$ = this.store.select(state => state.root.filteredList);
  }

  ngOnInit(): void {
    this.store.dispatch(loadList({ sections: this.sections, search: '' }));
  }

  onChange(sections: Sections[], search: string) {
    this.store.dispatch(loadList({ sections: (sections && sections.length) ? sections : this.sections, search: search  }));
  }

  selectItem(id: string) {
    this.store.dispatch(select({ id: id }))
  }
}
