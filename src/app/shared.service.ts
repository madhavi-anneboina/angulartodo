import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  todos = ['todo1','todo2']
  getTodos(){
    return this.todos
  }
  addTodo(task:any){
    this.todos.push(task)
  }
}
