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

formHeader = "Add Mobile"
mobile=""
showForm = false
mobileName:any ="";
price:any;
ram:any;
storage:any;
id= null;

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

openForm(data=null){
  this.showForm = true
  if(data){
    this.mobileName = data.name;
    this.price = data.price;
    this.ram = data.ram;
    this.storage = data.storage
     this.id = data.id
     this.formHeader="Edit Mobile"
  } else {
    this.id = null 
    this.formHeader = "Add Mobile"
  }
}
closeForm(){
  this.showForm = false;
  this.clearForm()
}
clearForm(){
  this.mobileName =null;
  this.price = null;
  this.ram = null;
  this.storage = null

}
saveMobile(){

  this.showForm =false;

  let  body = {
    name:this.mobileName,
    price:this.price,
    ram:this.ram,
    storage:this.storage
  }

  if(this.id){
    body.name.id=this.id;
    this.ms.putMobile(body).subscribe(
      (res)=>{
        this.getMobiles()
      },
      
    )
  }

  else{
    this.ms.postMobile(body).subscribe(
      (res)=>{
        this.getMobiles()
      },
    )
  }

}

}















