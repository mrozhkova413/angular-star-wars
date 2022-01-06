import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { People, PagedResults } from './api.models';
import { Observable } from 'rxjs';
import { API_URL } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor (
    private http: HttpClient,
    @Inject(API_URL) private baseApi: string
  ) {}

  getList(section: string, search: string | null): Observable<PagedResults<People>> {
    return this.http.get<PagedResults<People>>(`${this.baseApi}/${section}/?search=${search}`);
  }
}
