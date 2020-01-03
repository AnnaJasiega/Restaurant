import { Injectable, Output, EventEmitter } from '@angular/core';
import { Dish } from '../dish';



@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  dish:Array<Dish> = [];
  orderList: Array<Dish> = [];
  
  @Output() change: EventEmitter<any> = new EventEmitter();
  
  public add(data) {
  this.dish = data;
  this.orderList.push(data);
  this.change.emit(this.dish);
  }
  
  public getDataFromOrderList() {
    return this.orderList;
  }
}
