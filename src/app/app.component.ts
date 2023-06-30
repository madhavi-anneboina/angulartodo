import { Component,AfterViewInit,AfterViewChecked,OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl,FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';
import { Observable, of,from,range,interval,map,filter,fromEvent,debounceTime,merge,take,pluck,skip} from 'rxjs';
import { TodoService } from './todo.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChild('mobile')m:any
  @ViewChild('text')ip:any
  showHeader:boolean = true
   constructor(private router:Router){
    router.events.subscribe(
      (val) => {
        if(val instanceof NavigationEnd){
          if(val.url == '/login'){
            this.showHeader = false 
          } else{
            this.showHeader = true 
          }
        }
      }

    )
    
   }
   saveImages(e:any){
    console.log(e)
   }
 
 ngOnInit(): void {


 }





 
  
  }








  

