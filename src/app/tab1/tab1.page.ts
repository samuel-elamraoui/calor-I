import {Component, OnInit} from '@angular/core';
import {marketCategory, nutriscoreCategories, productCategory} from '../filters/filters';
import {
  MarketCategory,
  NutriscoreCategory,
  ProductCategory,
  ResultResearch,
  ValidateCart
} from '../interface/category.interface';
import {ProductService} from '../services/products.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  supermarketList: MarketCategory[] = [];
  cartName: string;
  supermarketSelected: any;
  productList: ProductCategory[] = [];
  nutriscoreList: NutriscoreCategory[] = [];
  nutriscoreListSelected: any;
  resultDisplay: ResultResearch[];
  cart: ResultResearch[];
  validateCart: ValidateCart[];
  resultNumberDisplay: number;
  info: boolean;
  research: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.supermarketList = marketCategory;
    this.productList = productCategory;
    this.nutriscoreList = nutriscoreCategories;
    this.resultDisplay = [];
    this.resultNumberDisplay = 10;
    this.cart = [];
    this.validateCart = [];
    this.info = false;
    this.research = '';
  }

  setProductSelected() {
    if (this.supermarketSelected) {
      // eslint-disable-next-line max-len
      this.productService.getProductSelected(this.supermarketSelected, this.nutriscoreListSelected, this.resultNumberDisplay).subscribe((result) => {
        console.log(result);
        this.resultDisplay = [];
        for (let i = 0; i < this.resultNumberDisplay; i++) {
          this.resultDisplay.push(
            {
              id: result.products[i].id,
              name: result.products[i].product_name_fr,
              image: result.products[i].image_url,
              nutriscoreGrade: result.products[i].nutriscore_grade,
              description: result.products[i].generic_name_fr,
              energyKcal100g: result.products[i].nutriments["energy-kcal_100g"]
            });
        }
      });
    }
  }

  displayMoreCards() {
    this.resultNumberDisplay += 10;
    this.setProductSelected();
  }

  addToCart(item) {
    console.log(item);
    this.cart.push({
      id: item.id,
      name: item.name,
      image: item.image,
      nutriscoreGrade: item.nutriscoreGrade,
      description: item.description,
      energyKcal100g: item.energyKcal100g
    });
  }

  validatingCart() {
    console.log(this.validateCart.length )
    if (this.validateCart.length > 0) {
      for (let i = 0; i < this.validateCart.length; i++) {
        if (this.validateCart[i].cartName == this.cartName) {
          this.validateCart[i] = {
            cartName: this.cartName,
            cart: this.cart
          }
        }
      }
    } else {
      this.validateCart.push({
        cartName: this.cartName,
        cart: this.cart,
      });
    }

    localStorage.setItem('cart', JSON.stringify(this.validateCart));
  }
  resetCard(){
    this.cart = [];
  }
}
