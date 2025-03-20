import { Component } from '@angular/core';
import {  } from '@angular/router';
import { Product } from './product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'inventory-app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[];

  constructor(){
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['apparel', 'shoes', 'running'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['apparel', 'outerwear'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['apparel', 'accessories'],
        29.99)
    ];  
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product); }
}
