import { Component } from '@angular/core';
import {  Dish  } from './dishes/dish'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant';
  total: number = 0;
  public orderList: Array<Dish> = [];

  totalPrice(){
    this.total =this.total + this.orderList[this.orderList.length-1].$price
    return this.total
  }

  onEmited(data){
  this.orderList.push(data)  
  this.totalPrice();
  }
}
