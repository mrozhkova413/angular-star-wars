import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { ALL, PagedResults } from './swapi.models';
import { Observable } from 'rxjs';
import { SWAPI_URL } from '../app.config';
import { Sections } from './filter.models';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor (
    private http: HttpClient,
    @Inject(SWAPI_URL) private swapiUrl: string
  ) {}

  getList(section: Sections, search: string | null): Observable<PagedResults<ALL>> {
    return this.http.get<PagedResults<ALL>>(`${this.swapiUrl}/${section}/?search=${search}`);
  }
}
