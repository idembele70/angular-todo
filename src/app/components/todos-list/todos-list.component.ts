import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/models';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() todos: ITodo[] = []
  @Output() deleteTodoEmitter = new EventEmitter<number>()
  @Output() completeTodoEmitter = new EventEmitter<number>()
  @Output() deleteCompletedTodosEmitter = new EventEmitter()
  deleteTodo = (id: number) => {
    this.deleteTodoEmitter.emit(id)
  }
  deleteCompletedTodos = () => {
    this.deleteCompletedTodosEmitter.emit()
  }
  toggleCompleted = (id: number) => {
    this.completeTodoEmitter.emit(id)
  }
}
