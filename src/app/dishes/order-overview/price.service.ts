import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  price: number = 0;
  
  @Output() change: EventEmitter<number> = new EventEmitter();
 
  totalPrice(data) {
  this.price = this.price + data.$price
  this.change.emit(this.price);
  
  }
}
