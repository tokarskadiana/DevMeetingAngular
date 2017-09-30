import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public constructor(private titleService: Title) {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  title = 'Rainbow Market';
  products: Product[];

  ngOnInit() {
    this.setTitle( 'Rainbow Market' );
    this.products = [
      {
        title: "Unicorn",
        price: 12000,
        imgUrl: "http://i163.photobucket.com/albums/t306/shakesville/unicorncode.jpg",
        description: "Rainbow unicorn"
      },
      {
        title: "Rainbow Unicorn",
        price: 167777,
        imgUrl: "http://www.unicornsrule.com/wp-content/uploads/rainbows-unicorns.jpg",
        description: "classical unicorn"
      },
      {
        title: "Dark Unicorn",
        price: 223989,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_R41Z8M8GJw5qq4tESMBvK8GD_115EgmGExlHq67TiuZdukMsg",
        description: "evel unicorn"
      },
      {
        title: "Unicorn",
        price: 12000,
        imgUrl: "http://i163.photobucket.com/albums/t306/shakesville/unicorncode.jpg",
        description: "Rainbow unicorn"
      },
      {
        title: "Rainbow Unicorn",
        price: 167777,
        imgUrl: "http://www.unicornsrule.com/wp-content/uploads/rainbows-unicorns.jpg",
        description: "classical unicorn"
      },
      {
        title: "Dark Unicorn",
        price: 223989,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_R41Z8M8GJw5qq4tESMBvK8GD_115EgmGExlHq67TiuZdukMsg",
        description: "evel unicorn"
      }

    ];
  }
}
