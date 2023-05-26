import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
     states = [
      {
        id : 1,
        name : "Andhra Pradesh",
        code : "AP"
      },
      {
        id : 2,
        name : "Telangana",
        code : "TS"
      },
      {
        id : 3,
        name : "Tamil Nadu",
        code : "TN"
      },
      {
        id : 4,
        name : "Karnataka",
        code : "KS"
      },

     ]
}
