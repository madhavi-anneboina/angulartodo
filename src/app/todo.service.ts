import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos =[
    "task1",
    "task2",
    "task3",
    "task4"
  ]
todolist = new Subject()
  constructor() {
    this.sendTodos()

   }
   sendTodos(){
    this.todolist.next(this.todos)
   }
   addNewTodo(t:any){
    this.todos.push(t)
    this.sendTodos()

   }
}
