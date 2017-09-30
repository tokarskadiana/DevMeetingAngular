import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor() { }

  @Input() product:Product;
 
  @Output()
  addToBasket: EventEmitter<Product> = new EventEmitter();

  addProductToBasket(product: Product) {
    this.addToBasket.emit(product);
  }
}
