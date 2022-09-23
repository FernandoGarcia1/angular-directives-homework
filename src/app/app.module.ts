import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirtsComponent } from './components/firts/firts.component';
import { OnStyleDirective } from './libs/directives/on-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirtsComponent,
    OnStyleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
