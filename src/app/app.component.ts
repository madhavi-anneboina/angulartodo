import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators,FormArray} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';

  testForm = new FormGroup({
    mobileNums : new FormArray(
      [
      new FormControl(),
      new FormControl()
    ]
    )
  })

  test(){
    console.log(this.testForm)
  }
  

  }

