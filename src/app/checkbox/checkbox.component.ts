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


  constructor(private fb:FormBuilder){
    this.testForm = this.fb.group({
      languages : this.fb.array([])
    })
   

  }
  handlelangs(e:any){
    let langarr = this.testForm.get('languages') as FormArray
    if (e.target.checked){
      langarr.push(new FormControl(e.target.value))
    } else {
      let i = 0
      langarr.controls.forEach(
        (l:any)=>{
          if(l.value == e.target.value){
            langarr.removeAt(i)
            return
          }
        }
      )
    }
    

  }


}
