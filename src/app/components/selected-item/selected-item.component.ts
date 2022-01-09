import { ALL } from './../../swapi/swapi.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent {
  @Input() selectedItem: ALL | null;

  isPeople(val: ALL| null): boolean {
    console.log(typeof val);
    return typeof val === 'number';
  }

}
