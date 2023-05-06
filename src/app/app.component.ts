import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';

  login = new FormGroup({
    uname : new FormControl("John",[Validators.required,Validators.minLength(8)]),
    email : new FormControl("john@gmail.com",[Validators.required,Validators.email])
  })
  show(){
    console.log(this.login)
  }

  }

