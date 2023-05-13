import { Component } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todos=[]
  constructor(private ts:TodoService){}

  ngOninit(): void{
    this.ts.todolist.subscribe(
      (data)=>{
        console.log(data)
      }
    )

    
  }

}
