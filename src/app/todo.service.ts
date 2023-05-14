import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

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
bs= new BehaviorSubject("Behaviour subject first data")
rs = new ReplaySubject()
todolist = new Subject()
  constructor() {
    this.sendTodos()
  
    this.bs.next("behaviour subject 1")
    this.bs.next("behaviour subject 2")
    this.rs.next("replay subject 1")
    this.rs.next("replay subject 2")

   }
   sendTodos(){
    this.todolist.next(this.todos)
   }
   addNewTodo(t:any){
    this.todos.push(t)
    this.sendTodos()

   }
}
