import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { People, PagedResults } from '../app.models';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor (
    private http: HttpClient,
    @Inject(API_URL) private baseApi: string
  ) {}

  getList(section: string, search: string | null): Observable<PagedResults<People>> {
    if (!search) {
      return this.http.get<PagedResults<People>>(`${this.baseApi}/${section}`);
    }

    return this.http.get<PagedResults<People>>(`${this.baseApi}/${section}/?search=${search}`);
  }
}
