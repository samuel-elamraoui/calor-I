import {Component, OnInit} from '@angular/core';
import {ResultResearch, ValidateCart} from '../interface/category.interface';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  cart: ValidateCart[];
  moyenneKcal: number;

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.moyenneKcal = 0;
  }

  ngOnInit() {
    console.log(this.cart);
    for (let i = 0; i < this.cart.length; i++) {
      for (let j = 0; j < this.cart[i].cart.length; j++) {
        if (this.cart[i].cart[j].energyKcal100g) {
          this.moyenneKcal += parseInt(this.cart[i].cart[j].energyKcal100g)
        }
        if (j == this.cart[i].cart.length - 1) {
          console.log(this.moyenneKcal)
          this.moyenneKcal = parseFloat((this.moyenneKcal / j).toFixed(2));
        }
      }
    }
  }
}
