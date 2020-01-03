import { Component, OnInit } from '@angular/core';

import { OrderListService } from '../../dishes/order-overview/order-list.service';
import { Dish } from '../../dishes/dish';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.css']
})
export class YourOrderComponent implements OnInit {

  orderList: Array<Dish> = [];
  sortedList: Array<Dish> = [];
  quantity: Array<number> = [0];

  sort () {
    this.orderList.sort(function(a,b) {
    return a.$id-b.$id;
    })
    for (let i = 0; i < this.orderList.length; i++) {
      this.orderList[i].$id = 1;
    }
    /*
    for (let i = 0; i < this.orderList.length-1; i++) {
      if (this.orderList[i].$id != 0){
        console.log(this.orderList[i].$id)
        for (let j = (i+1); j<this.orderList.length; j++ ){
          if (this.orderList[i].$name == this.orderList[j].$name) {
            console.log(this.orderList[i].$id, this.orderList[j].$id)
          this.quantity[i]++;
          console.log(this.orderList[i].$id, this.orderList[j].$id, this.quantity[i])
          
          console.log(this.orderList[i].$id, this.orderList[j].$id)
          console.log("----------------------")
          } 

        }
      } 
    }
  
   **/

     
    
  }
  constructor(
    private orderListService: OrderListService, 
  ) { }



  ngOnInit() {this.orderList = this.orderListService.getDataFromOrderList();
this.sort();
  }

}

