import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';

  submit(grp:any){
    console.log(grp.value)
    // form.setValue({
    //   username:"madhavi",
    //   password:"mady"

    // }) 
    grp.control.patchValue({
      username:"madhavi",
      

    })


  }
}
