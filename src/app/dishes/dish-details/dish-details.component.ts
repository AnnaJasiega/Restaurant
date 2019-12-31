import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DishListService } from '../dish-list.service';
import { Dish } from '../dish';
import { OrderListService } from '../order-overview/order-list.service';
import { PriceService } from '../order-overview/price.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  dishesList: Array<Dish>;
  dish: Dish;
  
  @Input('index') index: number;
  constructor(private service:DishListService, private orderListService: OrderListService, private priceService: PriceService) { }
 
  ngOnInit() {
  this.dishesList = this.service.getDataFromModel();
  this.dish = this.dishesList[this.index]
  }

  click(){
  this.orderListService.add(this.dish);
  this.priceService.totalPrice(this.dish)
  }
}