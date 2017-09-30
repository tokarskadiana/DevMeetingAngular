import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "./product";
import {Title} from "@angular/platform-browser";
import {ProductRepository, ProductRepositoryToken} from "./ProductRepository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  products:Product[];

  public constructor(private titleService: Title,
                     @Inject(ProductRepositoryToken) productRepository: ProductRepository) {
    this.products = productRepository.getProducts();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  title = 'Rainbow Market';
  filteredProducts:Product[];
  basket:Product[]=[];
  ngOnInit() {
    this.setTitle( 'Rainbow Market' );
  }

  onAddProductToBasket(product){
    this.basket.push(product);
    console.log(this.basket)
  }

  filterProduct(value:string){
    this.products = this.products.filter(product=>product.
      title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }
}
