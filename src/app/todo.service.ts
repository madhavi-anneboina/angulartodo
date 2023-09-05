import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject,AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskid=3
  todoList:any = [
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
  addTodo(taskname:any){
    this.todoList.push({"id":this.taskid, "task":taskname})

  }
  removeTodo(index:any){
    this.todoList.splice(index,1)
  }
  //  todos =[
  //   "task1",
  //   "task2",
  //   "task3",
  //   "task4"
  // ]

 
// bs= new BehaviorSubject("Behaviour subject first data")
// rs = new ReplaySubject()
// as = new AsyncSubject()
// todolist = new Subject()
  constructor() {
    // this.sendTodos()
    // this.as.next("data 1")
    // this.as.next("data 2")
    // this.bs.next("behaviour subject 1")
    // this.bs.next("behaviour subject 2")
    // this.rs.next("replay subject 1")
    // this.rs.next("replay subject 2")

   }
  //  sendTodos(){
  //   this.todolist.next(this.todos)
  //  }
  //  addNewTodo(t:any){
  //   this.todos.push(t)
  //   this.sendTodos()

  //  }
}
