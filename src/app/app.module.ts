import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { CurrencyGlobalComponent } from './currency-global/currency-global.component';
import { ConvertPipe } from './convert.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertComponent,
    CurrencyGlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ConvertPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
