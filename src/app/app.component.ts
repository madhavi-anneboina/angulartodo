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
  imageUrl: string = 'assets/image.jpeg';
 
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
   uploads: string[] = [];
   saveImages(e:any){
    console.log(e)
    let totalFiles = e.target.files
    if(totalFiles.length>0){
      for(let i=0; i<totalFiles.length;i++){
        let file = totalFiles[i]
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e:any)=>{
         let url:any = e.target.result;
         this.uploads.push(url)
        }
      }
      e.target.value=""
    }
   }
   deleteImage(i:any){
    this.uploads.splice(i,1)
   }
 
 ngOnInit(): void {


 }





 
  
  }








  

