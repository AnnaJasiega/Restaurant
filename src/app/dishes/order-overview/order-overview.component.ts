import { Component, OnInit, Input,  } from '@angular/core';
import { Dish } from '../dish';
import { OrderListService } from './order-list.service';
import { PriceService } from './price.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.css']
})
export class OrderOverviewComponent implements OnInit {

    
  @Input('orderList') orderList: Array<Dish>;
  @Input('price') price: number;


  constructor(
    private orderListService: OrderListService, 
    private priceService: PriceService,
    private route: ActivatedRoute,
  ) { }
  
 
  ngOnInit() {
    this.orderListService.change.subscribe(data => {
      this.orderList.push(data);
    });
    this.priceService.change.subscribe(data => {
      this.price = data
    })
  }

}
