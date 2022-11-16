import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompBromaComponent } from './comp-broma/comp-broma.component';
import { AddBromaComponent } from './add-broma/add-broma.component';
import { BanBadLanguajePipe } from './ban-bad-languaje.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompBromaComponent,
    AddBromaComponent,
    BanBadLanguajePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
