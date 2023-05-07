import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';

 
  constructor(private fb:FormBuilder){
   
  }
  regForm =this.fb.group(
    {
      name : [null,Validators.required],
      email : [null,Validators.required],
      mobilenumber:this.fb.array(
        [
          [],
          []
        ]
      )
    }
  )

  

  }

