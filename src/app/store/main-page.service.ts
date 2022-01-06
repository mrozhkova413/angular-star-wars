import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People, PagedResults } from '../app.models';
import { Observable } from 'rxjs';

const baseApi = 'https://swapi.dev/api'

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor (private http: HttpClient) {}

  getList(section: string, search: string | null): Observable<PagedResults<People>> {
    if (search === null) {
      return this.http.get<PagedResults<People>>(`${baseApi}/${section}`);
    }

    return this.http.get<PagedResults<People>>(`${baseApi}/${section}/?search=${search}`);
  }
}
