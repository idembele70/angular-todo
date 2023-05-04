import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/Todo.models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];
  inputTodo: string = ""
  constructor() { }
  ngOnInit(): void {
    this.todos = [
      {
        content: "First todo",
        completed: false
      },
      {
        content: "Second todo",
        completed: false
      },
      {
        content: "Third todo",
        completed: true
      },
    ]
  }
  // set todo completed or not
  toggleDone = (id: number): void => {
    this.todos.map(
      (todo, idx) => {
        if (idx === id)
          todo.completed = !todo.completed
        return todo
      }
    )
  }
  removeTodo = (id: number): void => {
    const filteredTodo = this.todos.filter(
      (_, idx) => idx !== id
    )
    this.todos = filteredTodo
  }
  addTodo = () => {
    const existingTodo = this.todos.find(
      ({ content }) => content === this.inputTodo
    )
    if (this.inputTodo != "" && !existingTodo) {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })
      this.inputTodo = ""
    }
  }
}
