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
  nutriA: number;
  nutriB: number;
  nutriC: number;
  nutriD: number;
  nutriE: number;

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.moyenneKcal = 0;
    this.nutriA = 0;
    this.nutriB = 0;
    this.nutriC = 0;
    this.nutriD = 0;
    this.nutriE = 0;
  }

  ngOnInit() {
    console.log(this.cart);
    for (let i = 0; i < this.cart.length; i++) {
      for (let j = 0; j < this.cart[i].cart.length; j++) {
        if (this.cart[i].cart[j].energyKcal100g) {
          this.moyenneKcal += parseInt(this.cart[i].cart[j].energyKcal100g);
        }
        switch (this.cart[i].cart[j].nutriscoreGrade) {
          case 'a':
            this.nutriA ++;
            break
          case 'b':
            this.nutriB ++;
            break
          case 'c':
            this.nutriC ++;
            break
          case 'd':
            this.nutriD ++;
            break
          case 'e':
            this.nutriE ++;
            break

        }
        if (j === this.cart[i].cart.length - 1) {
          console.log(this.moyenneKcal);
          this.moyenneKcal = parseFloat((this.moyenneKcal / j).toFixed(2));
        }
      }
    }
  }
}
