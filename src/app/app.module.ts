import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, QuanTriGheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
