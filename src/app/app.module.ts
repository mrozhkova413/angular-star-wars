import { NotApplicablePipe } from './common/not-applicable.pipe';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SWAPI_URL } from './app.config';
import { mainPageReducer } from './store/main-page.reducer';
import { MainPageEffects } from './store/main-page.effects';
import { FilterComponent } from './components/filter/filter.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';
import { SwapiService } from './swapi/swapi.service';
import { MockSwapiService } from './swapi/mock-swapi.service';
import { environment } from './environment/environment';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { HoverBoldDirective } from './common/hover-bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SelectedItemComponent,
    ItemsListComponent,
    NotApplicablePipe,
    HoverBoldDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    StoreModule.forRoot({
      root: mainPageReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([MainPageEffects]),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: SWAPI_URL,
      useValue: environment.swapi,
    },
    {
      provide: SwapiService,
      useClass: environment.mocked ? MockSwapiService : SwapiService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
