import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DishListService } from '../dish-list.service';
import {  Dish } from '../dish';




@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  
  
  dishesList: Array<Dish>;
  isVisible: Array<boolean> = [];
  public orderList: Array<Dish> = [];
  @Output() emitOrderList = new EventEmitter();

  click(i) {
    if(!this.isVisible[i]){
    this.isVisible[i] = true;
    } else {
    this.isVisible[i] = false;
    }
    this.orderList.push(this.dishesList[i]);
    console.log(this.orderList)
    this.emitOrderList.emit(this.dishesList[i])
 
  };



  constructor(private service:DishListService) { }

  ngOnInit() {
    this.dishesList = this.service.getDataFromModel();
  }

}
