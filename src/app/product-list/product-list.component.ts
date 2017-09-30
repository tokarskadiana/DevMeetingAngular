import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../product";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input()
  products: Product[];

  @Output() 
  addToBasket: EventEmitter<Product> = new EventEmitter();

  onAddProductToBasket(product: Product) {
    this.addToBasket.emit(product);
  }
}
