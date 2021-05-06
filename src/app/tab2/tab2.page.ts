import { Component, OnInit } from '@angular/core';
import {ResultResearch, ValidateCart} from '../interface/category.interface';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  cart: ValidateCart[];
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }
  ngOnInit() {
    console.log(this.cart);
  }
}
