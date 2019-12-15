import { Component, OnInit } from '@angular/core';
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
  
  index: number;

 

  click(i) {
    if(!this.isVisible[i]){
    this.isVisible[i] = true;
    } else {
    this.isVisible[i] = false;
    }
    
    console.log(i)
    this.index = i;
  };



  constructor(private service:DishListService) { }

  ngOnInit() {
    this.dishesList = this.service.getDataFromModel();
  }

}
