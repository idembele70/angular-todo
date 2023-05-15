import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ITodo } from './models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos$: Observable<ITodo[]>
  constructor(private store: Store<{ todos: ITodo[] }>) {
    this.todos$ = store.select("todos")
  }
  /*   onAddTodo(todo: ITodo) {
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
    onDeleteCompletedTodo() {
      const filteredTodos = this.todos.filter(
        todo => !todo.completed
      )
      this.todos = filteredTodos
    } */


}
