import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { Observable, of } from 'rxjs';

const baseApi = 'https://swapi.dev/api/'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor (private http: HttpClient) {}

  getListCharacters(): Observable<Character[]> {
    return of([
      {id: 0, name: 'name0', planet: 'planet0'},
      {id: 1, name: 'name1', planet: 'planet1'},
      {id: 2, name: 'name2', planet: 'planet2'},
      {id: 3, name: 'name3', planet: 'planet3'},
    ]);
    // return this.http.get('${baseApi}/people');
  }
}
