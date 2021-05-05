import { Component, OnInit } from '@angular/core';
import { marketCategory, productCategory } from '../filters/filters';
import { MarketCategory, ProductCategory } from '../interface/category.interface';
import {ProductService} from '../services/products.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  supermarketList: MarketCategory[] = [];
  supermarketSelected: any;
  productList: ProductCategory[] = [];
  productSelected: any;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.supermarketList = marketCategory;
    this.productList = productCategory;

  }
  setProductSelected(){
    this.productService.getProductSelected(this.supermarketSelected,this.productSelected).subscribe((result) => {
      console.log(result);
    });
  }
}
