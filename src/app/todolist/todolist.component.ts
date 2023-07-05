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
  todolist:any
  constructor(private ts:SharedService){}

  ngOninit(): void{
//     console.log("todos")
//     this.ts.todolist.subscribe(
//       (data)=>{
//         this.todos = data
//       }
//     )
// this.ts.sendTodos()
    this.todolist = this.ts.getTodos()
  }

}
