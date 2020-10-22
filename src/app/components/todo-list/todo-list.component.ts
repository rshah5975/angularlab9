import { Component, OnInit } from '@angular/core';
import { TodoVals } from '../../todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos

  constructor(private todoserv: TodoVals) { }

  ngOnInit(): void {
    this.todos = this.todoserv.todos;
  }
  removeTodo(id){
    this.todoserv.removingTodo(id)
    this.todos = this.todoserv.todos;
  }

}
