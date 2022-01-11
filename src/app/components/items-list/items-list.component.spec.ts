import { StoreModule } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';
import { mainPageReducer } from 'src/app/store/main-page.reducer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListComponent ],
      imports: [
        StoreModule.forRoot({ root: mainPageReducer}),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
