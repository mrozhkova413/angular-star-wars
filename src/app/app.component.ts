import { Component, OnInit } from '@angular/core';
import { ALL } from './swapi/swapi.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select, loadList, filterList } from './store/main-page.actions';

export interface AppState { root: MainPageState }

export interface MainPageState {
  selected: ALL | null;
  list: ALL[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-star-wars';
  selected$: Observable<ALL | null>
  list$: Observable<ALL[]>

  sections: string[] = ['people', 'starships', 'planets'];
  hairColors: string[] = ['brown', 'blonde', 'gray', 'black'];
  eyesColors: string[] = ['brown', 'red', 'blue', 'yellow'];

  constructor(private store: Store<AppState>) {
    this.selected$ = this.store.select(state => state.root.selected);
    this.list$ = this.store.select(state => state.root.list);
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
