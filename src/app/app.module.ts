import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsoleBlockComponent } from './console-block/console-block.component';
import { DrinksBlockComponent } from './drinks-block/drinks-block.component';
import { VendingBlockComponent } from './vending-block/vending-block.component';
import { DrinkItemsComponent } from './vending-block/drink-items/drink-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleBlockComponent,
    DrinksBlockComponent,
    VendingBlockComponent,
    DrinkItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
