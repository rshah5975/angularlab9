import { Component, OnInit } from '@angular/core';
import { TodoVals } from '../../todo.service'

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  id
  title
  details

  constructor(private todoserv: TodoVals) { }

  ngOnInit(): void {
  }
  addTodo() {
    this.todoserv.addingTodo(this.id, this.title, this.details)
  }

}
