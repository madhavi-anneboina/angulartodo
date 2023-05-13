import { Component } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todos:any=[]
  constructor(private ts:TodoService){}

  ngOninit(): void{
    console.log("todos")
    this.ts.todolist.subscribe(
      (data)=>{
        this.todos = data
      }
    )
this.ts.sendTodos()
    
  }

}
