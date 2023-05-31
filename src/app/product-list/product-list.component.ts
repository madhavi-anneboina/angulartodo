import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private http:HttpClient){
  }
  ngOnInit() : void{
    this.http.get("https://fakestoreapi.com/products")
  }
}
