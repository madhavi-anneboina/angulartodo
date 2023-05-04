import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';

  login = new FormGroup({
    uname : new FormControl(),
    password : new FormControl()
  })
  show(){
    console.log(this.login.value.uname)
  }

  }

