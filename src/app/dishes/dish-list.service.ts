import { Injectable } from '@angular/core';
import { DishesList } from './dishes-list';

@Injectable({
  providedIn: 'root'
})
export class DishListService {

  dishesList = DishesList;

  public getDataFromModel() {
    return this.dishesList;
  }

  constructor() { }
}
