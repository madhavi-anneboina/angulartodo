import { Component, AfterViewInit, AfterViewChecked, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable, of, from, range, interval, map, filter, fromEvent, debounceTime, merge, take, pluck, skip } from 'rxjs';
import { TodoService } from './todo.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
@ViewChild("para") p:any

@ViewChildren("heading") h:any
constructor(private http:HttpClient){
}
data:any = null
getData(){
  this.http.get('https://fakestoreapi.com/products?limit=5')
  .subscribe((data)=>{
    this.data = data
  })
}

// test(){
//   console.log(this.p)
//   for(let ele of this.h){
//     console.log(ele.nativeElement.innerText)
//   }
// }





}















