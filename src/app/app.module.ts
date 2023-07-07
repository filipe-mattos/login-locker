import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomePageComponent} from "./homePage/homePage.component";
import {PlataformCardComponent} from "./Shared/plataformCard/plataformCard.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlataformCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
