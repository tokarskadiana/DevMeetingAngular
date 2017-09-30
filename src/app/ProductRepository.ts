import {Product} from "./product";
import {InjectionToken} from "@angular/core";


export interface ProductRepository {
  getProducts(): Product[];
}

export class InMemoryProductRepository implements ProductRepository {
  public getProducts(): Product[] {
    return [
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
    ]
  }
}

export const ProductRepositoryToken = new InjectionToken('ProductRepository');
