import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  regForm:FormGroup
 constructor(private fb:FormBuilder){
  this.regForm = this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmPassword:['',[Validators.required]],

  }

  )

 }
 ngOninit(): void{

 }
 submit(){
  console.log(this.regForm.value)
 }
}
