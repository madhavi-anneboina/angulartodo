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
      new FormControl(null,Validators.required),
     
    ]
    )
  })
  Add(){
   let mobilenums = this.testForm.get('mobileNums') as FormArray
   mobilenums.push( new FormControl(null,Validators.required))
  
  }
  delete(i:any){
    let mobilenums = this.testForm.get('mobileNums') as FormArray
     mobilenums.removeAt(i)
  }

  test(){
    console.log(this.testForm)
  }
  

  }

