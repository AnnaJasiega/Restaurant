import { Injectable } from '@angular/core';
import { Dish } from '../dish';



@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  orderListService: Array<Dish>;
  /***
  import(orderList){
    this.orderListService = orderList;
    console.log("Hello from import");
  }

  public getDataFromModel() {
    console.log(this.orderListService);
    console.log("hello from service");
    return this.orderListService;
    
  }
*/
  constructor() { }
}
