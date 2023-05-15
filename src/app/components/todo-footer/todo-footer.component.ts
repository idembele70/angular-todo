import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models';
import { deleteCompletedTodos } from 'src/app/ngrx/actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {
  todos$: Observable<ITodo[]>;
  constructor(private store: Store<{ todos: ITodo[] }>) {
    this.todos$ = store.select("todos")
  }
  handleDeleteCompletedTodos = () => {
    this.store.dispatch(deleteCompletedTodos())
  }
}
