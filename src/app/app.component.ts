import { Component, AfterViewInit, AfterViewChecked, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable, of, from, range, interval, map, filter, fromEvent, debounceTime, merge, take, pluck, skip } from 'rxjs';
import { TodoService } from './todo.service';
import { NavigationEnd, Router } from '@angular/router';
import { MobileService } from './mobile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  constructor(private ms:MobileService) {
  }

 
mobiles:any= []



ngOnInit():void{
this.getMobiles()

}
getMobiles = () =>{
  this.ms.fetchMobiles().subscribe(
    (data)=>{
      this.mobiles = data
    }
   )
}

deletemobile(id:any){
 this.ms.deleteMobile(id).subscribe(
  (res)=>{
    this.getMobiles()
  }

 )
}


}















