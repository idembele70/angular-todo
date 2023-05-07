import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ITodo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: ITodo[]
  constructor() {
    this.todos = [{
      id: 0,
      text: "First Todo",
      completed: false
    }]
  }
  onAddTodo(todo: ITodo) {
    this.todos.push(todo)
  }
  onDeleteTodo(id: number) {
    const newTodos = this.todos.filter(
      todo => todo.id !== id
    )
    this.todos = newTodos
  }
  onCompleteTodo(id: number) {
    const newTodos = this.todos.map(
      todo => {
        if (todo.id === id) {
          return ({
            ...todo, completed: !todo.completed
          })
        } else
          return todo
      }
    )
    this.todos = newTodos
  }
  onDeleteAllTodo() {
    this.todos = []
  }


}
