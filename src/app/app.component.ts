import { Component, OnInit } from '@angular/core';
import { People } from './app.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select, loadList } from './store/main-page.actions';

export interface AppState { root: MainPageState }

export interface MainPageState {
  selected: People | null;
  list: People[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-star-wars';
  selected$: Observable<People | null>
  list$: Observable<People[]>

  constructor(private store: Store<AppState>) {
    this.selected$ = this.store.select(state => state.root.selected);
    this.list$ = this.store.select(state => state.root.list);
  }

  ngOnInit(): void {
    this.store.dispatch(loadList({ section: "people", search: '' }));
  }

  selectCharacter(id: number) {
    this.store.dispatch(select({ id: id }))
  }

  onKey(event: KeyboardEvent) {
    this.store.dispatch(loadList({ section: "people", search: (event.target as HTMLInputElement).value  }));
  }
}
