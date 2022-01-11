import { ALL } from './../../swapi/swapi.models';
import { Component, Input, ChangeDetectionStrategy, TemplateRef, ViewChildren, AfterContentChecked, QueryList } from '@angular/core';
import { Sections } from 'src/app/swapi/filter.models';
import { TemplateIdDirective } from 'src/app/common/template-id/template-id.directive';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectedItemComponent implements AfterContentChecked {
  @Input() selectedItem: ALL;

  @ViewChildren(TemplateIdDirective)
  private templatesContainer: QueryList<TemplateIdDirective>;

  public template: TemplateRef<any> | null;

  ngAfterContentChecked(): void {
    this.setTemplate();
  }

  private setTemplate() {
    this.template = this.templatesContainer?.toArray().find(x => x.templateId === this.section )?.template || null;
  }

  public get imageUrl(): string {
    const splitted = this.selectedItem.url.split('/');
    const id = splitted[splitted.length - 2];
    let section = splitted[splitted.length - 3];
    if (section === 'people') {
      section = 'characters';
    }
    return `${this.baseImageUrl}/${section}/${id}.jpg`;
  }

  public get section(): Sections {
    const splitted = this.selectedItem.url.split('/');
    const section = splitted[splitted.length - 3];
    return section;
  }

  private baseImageUrl = 'https://starwars-visualguide.com/assets/img';
}
