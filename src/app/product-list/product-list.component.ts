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
    
  
  ngOnInit() : void{
    this.http.get("https://fakestoreapi.com/products").subscribe(
      (res) =>{
       this.filterdProducts = res
       this.allProducts = res
      }
    )
  }
  filterProducts(){
    this.filterdProducts = this.allProducts.filter(
      (p:any) => {
        return p.title.includes(this.searhInput)
      }
    )
  }
sort(order:any){
  if(order == 'asc'){
    this.filterdProducts.sort(
      (p1:any,p2:any)=>{
      return p1.price > p2.price ? 1 : -1
      }
    )
  }
  else{
    this.filterdProducts.sort(
      (p1:any,p2:any)=>{
       return p1.price > p2.price ? -1 : 1
      }
    )
  }
}
}
