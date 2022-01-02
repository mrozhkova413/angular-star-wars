import { Component } from '@angular/core';
import { Character } from './store/characters/character.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCharacter } from './store/characters/characters.actions';


interface AppState {
  character: Character;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-star-wars';

  character$: Observable<Character>

  list: number[] = [0, 1, 2, 3]

  constructor(private store: Store<AppState>) {
    this.character$ = this.store.select('character')
  }

  selectCharacter(id: number) {
    this.store.dispatch(selectCharacter({ id: id }))
  }
}
