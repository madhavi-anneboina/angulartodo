import { Component, AfterViewInit, AfterViewChecked, OnInit, ViewChild } from '@angular/core';
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
 counter:number = 0
 name:string="ktff"
city : any = "Hyderabad"
show :any = "mafh"
names = ["mad","rad","cad"]
updatecity(){
  this.city = "Bangolore"
}


}















