import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { People, PagedResults } from './swapi.models';
import { Observable } from 'rxjs';
import { SWAPI_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor (
    private http: HttpClient,
    @Inject(SWAPI_URL) private swapiUrl: string
  ) {}

  getList(section: string, search: string | null): Observable<PagedResults<People>> {
    return this.http.get<PagedResults<People>>(`${this.swapiUrl}/${section}/?search=${search}`);
  }
}
