import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()list:any
  // people = [
  //   { name: 'John Doe', age: 30, email: 'john@example.com' },
  //   { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
   
  // ];

}
