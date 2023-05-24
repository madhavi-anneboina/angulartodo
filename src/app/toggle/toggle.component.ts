import { Component } from '@angular/core';
// import { fa-EmptyError } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent { 
  showpassword = true
  toggleshow(){
    this.showpassword = false
  }

}
