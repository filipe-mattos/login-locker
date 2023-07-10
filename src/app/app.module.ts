import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomePageComponent} from "./homePage/homePage.component";
import {PlataformCardComponent} from "./Shared/plataformCard/plataformCard.component";
import {HeaderComponent} from "./Shared/header/header.component";
import {FooterComponent} from "./Shared/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlataformCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
