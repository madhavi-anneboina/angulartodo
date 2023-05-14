import { Component,AfterViewInit,AfterViewChecked,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl,FormGroup, Validators,FormArray,FormBuilder,} from '@angular/forms';
import { Observable } from 'rxjs';
import { TodoService } from './todo.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  wish ="hello good evning from app component.ts"
  title = 'angulartodo';
  users:any;
  mobile=""
  counter=0
  ss:any
  bs:any
  constructor(private td:TodoService){  

  }
 ngOnInit(): void{
  this.bs = this.td.s1.subscribe(
    (data:any)=>{
      console.log(data)
    }
  )
  this.ss = this.td.s2.subscribe(
    (t:any)=>{
      console.log(t)
    }
  )
 }

 emit(){
  this.ss.next("second data")

 }

  name = new Observable ((nums)=>{
    nums.next(100)
    nums.next("rxjs")
    nums.next("hello")

  })
  arr:any =[]
  ngOninit(){
    setTimeout(()=>{
     this.name.subscribe(
      {
        next : (data)=> this.arr.push(data),
        error : (err)=> console.log(err),
        complete:() => console.info("complete")
      }
     )

    })
  
  }
// ngAfterViewInit(): void {
//   console.log("After view init added ")
// }
// ngAfterViewChecked():void{
// console.log("ng view checked")
// }

// updateCounter(){
//   this.counter++
// }

  mobileList = [
    "Oppo",
    "Redmi",
    "Realme",
    "Nokia",
    "Samsung"
  ]

  addMobile(){
    let numberList = [...this.mobileList,this.mobile]
    numberList.push(this.mobile)
    this.mobile=""
   
  }

//  getC(control:any){
//   return this.regForm.get(control)

//  }


  }

