import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { AppState } from './app.state';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/book.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, BookListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // setting up ngrx store
    StoreModule.forRoot<AppState>({ book: BookReducer }),
    EffectsModule.forRoot([BookEffects]), // Register BookEffects here
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
