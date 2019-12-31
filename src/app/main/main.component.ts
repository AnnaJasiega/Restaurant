
import { Component } from '@angular/core';
import {  Dish  } from '../dishes/dish'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

   title = 'Restaurant';
    total: number = 0;
    public orderList: Array<Dish> = [];
  
   
  
    onEmited(data){
    this.orderList.push(data)  
    }
  }