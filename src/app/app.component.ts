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
  title = 'Rainbow Market';
  basket:Product[]=[];
  allProducts:Product[];
  public constructor(private titleService: Title,
                     @Inject(ProductRepositoryToken) productRepository: ProductRepository) {
    this.allProducts = productRepository.getProducts();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
 
  ngOnInit() {
    this.setTitle( 'Rainbow Market' );
    this.products = this.allProducts;
  }

  onAddProductToBasket(product){
    this.basket.push(product);
    console.log(this.basket)
  }

  filterProduct(value:string){
    this.products = this.allProducts.filter(product=>product.
      title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }
}
