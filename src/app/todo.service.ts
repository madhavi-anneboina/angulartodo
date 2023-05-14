import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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
s1 = new BehaviorSubject("Behaviour subject first data")
s2 = new Subject()
todolist = new Subject()
  constructor() {
    this.sendTodos()
    this.s2.next("simple subjects")
    this.s1.next("behaviour subject second data")

   }
   sendTodos(){
    this.todolist.next(this.todos)
   }
   addNewTodo(t:any){
    this.todos.push(t)
    this.sendTodos()

   }
}
