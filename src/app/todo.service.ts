import { Injectable } from '@angular/core';

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

  constructor() { }
}
