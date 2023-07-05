import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
 constructor(private ts:SharedService){}
// addTodo(t:string){
//   this.ts.addNewTodo(t)

// }
addNew(input:any){
  this.ts.addTodo(input.value)
  input.value=""
  console.log(this.ts.getTodos())

}
}
