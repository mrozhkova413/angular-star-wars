import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { charactersReducer } from './store/characters/characters.reducer';
import { CharacterEffects } from './store/characters/characters.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      character: charactersReducer
    }),
    EffectsModule.forRoot([CharacterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
