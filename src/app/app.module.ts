import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomePageComponent} from "./homePage/homePage.component";
import {PlataformCardComponent} from "./Shared/plataformCard/plataformCard.component";
import {HeaderComponent} from "./Shared/header/header.component";
import {FooterComponent} from "./Shared/footer/footer.component";
import {FormsModule} from "@angular/forms";
import {BasicHighlightDirective} from "./basic-highligtht/basic-highlight.directive";
import {BetterHighlightDirective} from "./better-highligtht/better-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlataformCardComponent,
    HeaderComponent,
    FooterComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
