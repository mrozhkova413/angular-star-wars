import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ALL } from 'src/app/swapi/swapi.models';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListComponent {
  @Input() items: ALL[];
  @Output() selectedItemEvent = new EventEmitter<string>();

  constructor() { }

  selectItem(id: string) {
    this.selectedItemEvent.emit(id);
  }

  trackItem(index: number, item: any) {
    return item ? item.url : null;
  }
}
