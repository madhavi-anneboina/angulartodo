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
num1 :any = 6890.9080;
num2 :any = 8
salary:any =90000
name :string ="madhavi"
dob = new Date()
person1 ={
  name:"xyz",
  age:"90",
  phonenumber:"4848472947219",
  salary:"680000"
}

}















