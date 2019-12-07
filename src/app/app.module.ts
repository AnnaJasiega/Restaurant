import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes-overview/dishes.component';
import { OrderOverviewComponent } from './dishes/order-overview/order-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    OrderOverviewComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
