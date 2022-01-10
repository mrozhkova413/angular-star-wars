import { Injectable } from '@angular/core';
import { ALL, PagedResults } from './swapi.models';
import { Observable, of } from 'rxjs';
import { Sections } from './filter.models';
import { people, planets, starships } from './example-objects';

@Injectable({
  providedIn: 'root'
})
export class MockSwapiService {
  getList(section: Sections, search: string | null): Observable<PagedResults<ALL>> {
    switch(section) {
      case 'people': return of(people)
      case 'planets': return of(planets)
      case 'starships': return of(starships)
      default: throw new Error("Nonexistent section")
    }
  }
}
