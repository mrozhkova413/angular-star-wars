import { Component, OnInit } from '@angular/core';
import { Character } from './store/characters/character.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCharacter, loadListCharacters } from './store/characters/characters.actions';
import { tap } from 'rxjs/operators';

export interface AppState {
  selectedCharacter: Character;
  listCharacters: Character[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-star-wars';
  selectedCharacter$: Observable<Character>
  listCharacters$: Observable<Character[]>

  constructor(private store: Store<AppState>) {
    this.selectedCharacter$ = this.store.select('selectedCharacter')
    this.listCharacters$ = this.store.select('listCharacters').pipe(
      tap((data) => console.log(data))
    );
  }

  ngOnInit(): void {
    this.store.dispatch(loadListCharacters());
  }

  selectCharacter(id: number) {
    this.store.dispatch(selectCharacter({ id: id }))
  }
}
