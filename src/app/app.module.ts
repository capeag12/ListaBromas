import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompBromaComponent } from './comp-broma/comp-broma.component';
import { AddBromaComponent } from './add-broma/add-broma.component';

@NgModule({
  declarations: [
    AppComponent,
    CompBromaComponent,
    AddBromaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
