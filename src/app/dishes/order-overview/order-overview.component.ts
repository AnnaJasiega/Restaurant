import { Component, OnInit, Input,  } from '@angular/core';
import { DishesComponent } from '../dishes-overview/dishes.component';
import { Dish } from '../dish';
import {  OrderListService } from './order-list.service';


@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {

    
  @Input('orderList') orderList: Array<Dish>;
  @Input('total') total: number;


  constructor(
    private orderListService: OrderListService
  ) { }
  
 
  ngOnInit() {
    this.orderListService.change.subscribe(data => {
      this.orderList.push(data);
      this.total =+ data.price
    });
    
  }

}
