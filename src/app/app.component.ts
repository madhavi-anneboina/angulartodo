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
    username: new FormControl(null, [Validators.required], [this.usernameCheck.bind(this)])
  });

 users = [
  "user1","user2","user3"
 ]
 usernameCheck =(control:any):Promise<any> =>{
   return new Promise ((resolve,reject)=>{
    let name = control.value; 
    setTimeout(()=>{
      if(this.users.indexOf(name)>=0){
        resolve({"duplicateuser":true})
      } else{
        resolve (null)
      }
    },2000)

    }
  )
 }

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

