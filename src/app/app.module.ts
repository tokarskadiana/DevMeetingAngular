import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {InMemoryProductRepository, ProductRepositoryToken} from "./ProductRepository";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Title,
    {provide: ProductRepositoryToken, useClass: InMemoryProductRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
