import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  products: [

    {
      "id": 101,
      "name": "Smartphone",
      "category_id": 1,
      "price": 599.99
    },
    {
      "id": 102,
      "name": "Laptop",
      "category_id": 1,
      "price": 899.99
    },
    {
      "id": 103,
      "name": "T-shirt",
      "category_id": 2,
      "price": 19.99
    },
    {
      "id": 104,
      "name": "Jeans",
      "category_id": 2,
      "price": 39.99
    },
    {
      "id": 105,
      "name": "Java Programming Book",
      "category_id": 3,
      "price": 29.99
    },
    {
      "id": 106,
      "name": "Cookbook",
      "category_id": 3,
      "price": 24.99
    }
  ]
}









