import { Component, OnInit, Input } from '@angular/core';
import { DishesComponent } from '../dishes-overview/dishes.component';
import { Dish } from '../dish';


@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {

  total: Number = 0;
  
  @Input('orderList') orderList: Array<Dish>;

  totalPrice(){
    for (let i=0; i<this.orderList.length; i++){
      this.total =+ this.orderList[i].$price
    }
    return this.total
  }

  constructor() { }
  
 
  ngOnInit() {
   this.totalPrice();
    
  }

}
