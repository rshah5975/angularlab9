import { Component, OnInit } from '@angular/core';
import { TodoVals } from '../../todo.service'

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todos

  constructor(private todoserv: TodoVals) { }

  ngOnInit(): void {
    this.todos = this.todoserv.todos;
  }

}
