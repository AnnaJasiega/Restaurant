import { Injectable, Output, EventEmitter } from '@angular/core';
import { Dish } from '../dish';



@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  dish:Array<Dish> = []
  
  @Output() change: EventEmitter<any> = new EventEmitter();
  
  add(data) {
  this.dish = data;
  this.change.emit(this.dish);
  }
}
