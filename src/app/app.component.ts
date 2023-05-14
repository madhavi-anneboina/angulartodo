import { Component,AfterViewInit,AfterViewChecked,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl,FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';
import { Observable, of,from,range} from 'rxjs';
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
  range(2,9).subscribe(
    (data)=>{
      console.log(data)
    }
  )
 this.td.bs.subscribe(
  (data)=>{
    console.log(data)
  }
 )
 this.td.rs.subscribe(
  (data)=>{
    console.log(data)
  }
 )

 this.td.as.subscribe(
  (data)=>{
    console.log(data)
  }
)


 }
 add(){
  this.td.as.complete()
 }

 emit(){
//   this.ss.next("second data")

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

