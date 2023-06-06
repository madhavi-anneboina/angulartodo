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
  filterdProducts:any
  allProducts:any
  searhInput = ""
    
  
  // ngOnInit() : void{
  //   this.http.get("https://fakestoreapi.com/products").subscribe(
  //     (res) =>{
  //      this.filterdProducts = res
  //      this.allProducts = res
  //     }
  //   )
  // }
  filterProducts(){
    this.filterdProducts = this.allProducts.filter(
      (p:any) => {
        return p.title.includes(this.searhInput)
      }
    )
  }

}
