import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.component';
import { ALL } from 'src/app/swapi/swapi.models';
import { select } from 'src/app/store/main-page.actions';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input() items: ALL[];

  constructor(private store: Store<AppState>) { }

  selectItem(url: string) {
    this.store.dispatch(select({ id: url }))
  }
}
