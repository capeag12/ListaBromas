import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompBromaComponent } from './comp-broma/comp-broma.component';
import { AddBromaComponent } from './add-broma/add-broma.component';
import { BanBadLanguajePipe } from './ban-bad-languaje.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompBromaComponent,
    AddBromaComponent,
    BanBadLanguajePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
