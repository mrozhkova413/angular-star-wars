import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { mainPageReducer } from './store/main-page.reducer';
import { MainPageEffects } from './store/main-page.effects';
import { HttpClientModule } from '@angular/common/http';
import { API_URL } from './app.config';
import { environment } from './environment/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      root: mainPageReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot([MainPageEffects]),
  ],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
