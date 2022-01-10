import { StoreModule } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';
import { mainPageReducer } from 'src/app/store/main-page.reducer';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsListComponent ],
      imports: [
        StoreModule.forRoot({ root: mainPageReducer}),
      ],
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
