import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes-overview/dishes.component';
import { OrderOverviewComponent } from './dishes/order-overview/order-overview.component';
import { DishDetailsComponent } from './dishes/dish-details/dish-details.component';
import { OrderListService } from './dishes/order-overview/order-list.service';
import { DishListService } from './dishes/dish-list.service';
import { PriceService } from './dishes/order-overview/price.service';
import { YourOrderComponent } from './order/your-order/your-order.component';
import { MainComponent } from './main/main.component';

//import { AppRoutingModule } from './app-routing.module'

const routes: Routes = [
  { path: 'yourorder', component: YourOrderComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    OrderOverviewComponent,
    DishDetailsComponent,
    YourOrderComponent,
    MainComponent, 
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes, {
    enableTracing: true
    })
   //AppRoutingModule,
  ],
  providers: [OrderListService, DishListService, PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
