import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  isChecked: boolean = false;
  onCheckboxChange(): void {
  
    if (this.isChecked) {
      console.log('Checkbox is checked');
 
    } else {
      console.log('Checkbox is unchecked');
    
    }
  }

}
