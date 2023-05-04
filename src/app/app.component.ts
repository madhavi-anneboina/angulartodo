import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';

  submit(form:any){
    console.log(form.value)
    form.setValue({
      username:"madhavi",
      password:"mady"

    })

  }
}
