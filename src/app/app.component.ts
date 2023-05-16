import { Component,AfterViewInit,AfterViewChecked,OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl,FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';
import { Observable, of,from,range,interval,map,filter,fromEvent,debounceTime} from 'rxjs';
import { TodoService } from './todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('mobile')m:any
  @ViewChild('text')ip:any
   obs1 = of (3,4,5,6)
   obs2 = from(["c","s"])
  constructor(private td:TodoService){  
  
  }
  

 ngOnInit(): void {

 }





 
  
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





//  getC(control:any){
//   return this.regForm.get(control)

//  }


  

