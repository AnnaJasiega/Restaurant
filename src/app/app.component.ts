import { Component } from '@angular/core';
import {  Dish  } from './dishes/dish'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant';
  public orderList: Array<Dish> = [];

  onEmited(data){
  this.orderList.push(data)  
  }
}
