import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray } from '@angular/forms';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  testForm:any;
  langs = ["c","java","python","javascript","typescript","Angular","React"]
  constructor(){

  }

}
