import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsoleBlockComponent } from './console-block/console-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
