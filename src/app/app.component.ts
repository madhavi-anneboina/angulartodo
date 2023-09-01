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
@ViewChild(ChildComponent) chill:any
 cdata:any=''
test(){
  // this.chill.passtoParent()
  this.cdata = this.chill.passtoParent()
}


}















