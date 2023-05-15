import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/models';
import { addTodo } from 'src/app/ngrx/actions/todo.actions';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent implements OnInit {
  inputText: string = ""
  todos$: Observable<ITodo[]>
  todos: ITodo[]
  constructor(private store: Store<{ todos: ITodo[] }>) {
    this.todos$ = store.select("todos")
    this.todos = []
  }
  ngOnInit(): void {
    this.todos$.subscribe(newTodos => {
      this.todos = newTodos
    })
  }
  handleAddTodo = () => {
    const existingTodo = this.todos.find(
      todo => todo.text === this.inputText
    )
    if (!existingTodo && this.inputText) {
      this.store.dispatch(
        addTodo({
          id: Math.random(),
          text: this.inputText,
          completed: false
        })
      )
      this.inputText = ""
    }
  }
}
