import { Component, OnInit } from '@angular/core';
import { Character } from './store/character.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select, loadList } from './store/main-page.actions';

export interface AppState { root: MainPageState }

export interface MainPageState {
  selected: Character;
  list: Character[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-star-wars';
  selected$: Observable<Character>
  list$: Observable<Character[]>

  constructor(private store: Store<AppState>) {
    this.selected$ = this.store.select(state => state.root.selected);
    this.list$ = this.store.select(state => state.root.list);
  }

  ngOnInit(): void {
    this.store.dispatch(loadList({ section: "people" }));
  }

  selectCharacter(id: number) {
    this.store.dispatch(select({ id: id }))
  }
}
