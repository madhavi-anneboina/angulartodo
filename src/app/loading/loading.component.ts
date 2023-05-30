import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  users:any =[];
  loading: boolean = true;
  constructor(private http:HttpClient){
  }
ngOnInit(): void{
  this.http.get("https://jsonplaceholder.typicode.com/users")
  .subscribe(
    (data) =>{
      this.users = data
    }
  )
}
}
