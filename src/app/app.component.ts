import { Component, AfterViewInit, AfterViewChecked, OnInit, ViewChild } from '@angular/core';
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
@ViewChild("mad") m:any
 cdata:any=''

ngAfterViewInit(){
  console.log(this.m.nativeElement)
  this.m.nativeElement.onkeyup = () =>{
    console.log(this.m.nativeElement.value)
  }

}


}















