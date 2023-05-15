import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ITodo } from 'src/app/models';
import { deleteTodo, toggleCompleted } from 'src/app/ngrx/actions/todo.actions';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.scss']
})
export class TodoRowComponent {
  todos$: Observable<ITodo[]>
  constructor(private store: Store<{ todos: ITodo[] }>) {
    this.todos$ = store.select("todos")
  }
  handleDeleteTodo = (id: number) => {
    this.store.dispatch(deleteTodo({ id }))
  }
  handleToggleCompleted = (id: number) => {
    this.store.dispatch(toggleCompleted({ id }))
  }
}
