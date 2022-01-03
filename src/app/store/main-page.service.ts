import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, PagedResults } from '../app.models';
import { Observable } from 'rxjs';

const baseApi = 'https://swapi.dev/api/'

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor (private http: HttpClient) {}

  getList(section: string): Observable<PagedResults<Character>> {
    return this.http.get<PagedResults<Character>>(`${baseApi}/${section}`);
  }
}
