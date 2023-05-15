import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos$: Observable<ITodo[]>
  constructor(private store: Store<{ todos: ITodo[] }>) {
    this.todos$ = store.select("todos")
  }

  ngOnInit(): void {
    this.store.select(state => state.todos).subscribe(
      todos => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }
    )
  }

}
