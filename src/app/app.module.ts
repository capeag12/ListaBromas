import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompBromaComponent } from './comp-broma/comp-broma.component';
import { CompAddBromaComponent } from './comp-add-broma/comp-add-broma.component';

@NgModule({
  declarations: [
    AppComponent,
    CompBromaComponent,
    CompAddBromaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
