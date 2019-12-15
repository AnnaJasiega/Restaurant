import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes-overview/dishes.component';
import { OrderOverviewComponent } from './dishes/order-overview/order-overview.component';
import { DishDetailsComponent } from './dishes/dish-details/dish-details.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OrderListService } from './dishes/order-overview/order-list.service';
import { DishListService } from './dishes/dish-list.service';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    OrderOverviewComponent,
    DishDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [OrderListService, DishListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
