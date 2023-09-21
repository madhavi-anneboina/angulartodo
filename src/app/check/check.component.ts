import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  isChecked: boolean = false;
  onCheckboxChange(): void {
    // You can add your logic here
    if (this.isChecked) {
      console.log('Checkbox is checked');
      // Add your code for when the checkbox is checked
    } else {
      console.log('Checkbox is unchecked');
      // Add your code for when the checkbox is unchecked
    }
  }

}
