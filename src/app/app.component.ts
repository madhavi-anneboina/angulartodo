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
 regForm = new FormGroup({
  password : new FormControl(null,[Validators.required,this.uppercaseTest])

 })
 uppercaseTest(c:any){
  let pattern = /[A-Z]/
  if(pattern.test(c.value)){
    return null
  
  }
  return {'noupper':true}
 }

 show(){
  console.log(this.regForm)
 }

  

  }

