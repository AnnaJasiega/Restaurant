import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.component.html',
  styleUrls: ['./address-data.component.css']
})
export class AddressDataComponent implements OnInit {

  addressForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    houseNumber: new FormControl(''),
    postCode: new FormControl(''),
    city: new FormControl(''),
    phoneNumber: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
    
  }

}
