import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderListService } from '../../dishes/order-overview/order-list.service';
import { DishListService } from '../../dishes/dish-list.service'
import { Dish } from '../../dishes/dish';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.css']
})
export class YourOrderComponent implements OnInit {
  dishesList: Array<Dish> = [];
  orderList: Array<Dish> = [];
  sortedList: Array<Dish> = [];
  isVisible: Array<boolean> = [];
  i: number;
  
   

  sort () {
   
    for (let i = 0; i<this.dishesList.length; i++){
      for (let j = 0; j<this.orderList.length; j++){
        if (this.dishesList[i].$name == this.orderList[j].$name){
        this.dishesList[i].$quantity++;
        }
      }
    }

    for (let i = 0; i<this.dishesList.length; i++){
        if (this.dishesList[i].$quantity != 0){
        this.sortedList.push(this.dishesList[i])
        }
      }
     
  } 
  click (i) {
    this.isVisible[i] = true;
    this.i = i
       
  }
 
  constructor(
    private orderListService: OrderListService, 
    private dishListService: DishListService,
  ) { }

  enter(value) {
    this.isVisible[this.i] = false;
    this.sortedList[this.i].$quantity = value;
  }

  getTotal() {
    let total:number = 0;
    for (let i=0; i<this.sortedList.length; i++){
      total += (this.sortedList[i].$price*this.sortedList[i].$quantity);
    }
    return total;
  }

  ngOnInit() {this.orderList = this.orderListService.getDataFromOrderList();
    this.dishesList = this.dishListService.getDataFromModel();
    this.sort();
  }

}

