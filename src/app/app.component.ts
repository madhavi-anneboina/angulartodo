import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl,FormGroup, Validators,FormArray,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';
  users:any;
  constructor(private http:HttpClient){   
  }

  show(f:any){
    console.log(f)
  }
  handleSubmit(f:any){
    console.log(f.value)
    f.reset()
  }
  ngOnInit(){
   this.users= this.http.get("https://jsonplaceholder.typicode.com/users")
    // .subscribe(
    //   (data) =>{
    //     this.users = data
    //   }

    // )
  }


  }

