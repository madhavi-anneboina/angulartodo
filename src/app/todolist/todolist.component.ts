import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todos:any=[]
  todolist:any = [
    {
      "id":1,
      "task":"task1"
    },
    {
      "id":2,
      "task":"task2"
    },
    {
      "id":3,
      "task":"task3"
    }
  ]
  constructor(private ts:SharedService){}

  ngOninit(): void{
//     console.log("todos")
//     this.ts.todolist.subscribe(
//       (data)=>{
//         this.todos = data
//       }
//     )
// // this.ts.sendTodos()
//     this.todolist = this.ts.getTodos()
  }

}
