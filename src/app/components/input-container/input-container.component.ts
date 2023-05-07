import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/models';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent {
  @Output() addTodoEmitter = new EventEmitter<ITodo>()
  @Input() todos: ITodo[] = []
  inputText: string = ""
  addTodo = () => {
    const existingTodo = this.todos.find(
      todo => todo.text === this.inputText
    )
    if (!existingTodo && this.inputText) {
      this.addTodoEmitter.emit({
        id: Math.random(),
        text: this.inputText,
        completed: false
      })
      this.inputText = ""
    }
  }
}
