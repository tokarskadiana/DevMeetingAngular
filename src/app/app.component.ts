import { Component, OnInit } from '@angular/core';
import { Product } from "./product";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rainbow Market';
  products:Product[];  
  ngOnInit() {
    this.products =[
      {title:"Unicorn", price:12000},
      {title:"Rainbow Unicorn", price: 167777}
    ]; 
  }
  
}
