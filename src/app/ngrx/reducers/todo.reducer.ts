import { createReducer, on } from "@ngrx/store";
import { ITodo } from "src/app/models";
import { addTodo, deleteCompletedTodos, deleteTodo, toggleCompleted } from "../actions/todo.actions";
const localTodos = localStorage.getItem("todos")
const initialState: ITodo[] = localTodos ? JSON.parse(localTodos) : []
/*  {
   id: 0,
   text: "todo 1",
   completed: false,
 },
 {
   id: 1,
   text: "todo 2",
   completed: false,
 }, */


const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { type, ...todo }) =>
    [...state, todo]
  ),
  on(deleteTodo, (state, { id }) =>
    state.filter(
      todo => todo.id !== id
    )
  ),
  on(toggleCompleted, (state, { id }) =>
    state.map(
      todo => {
        if (todo.id === id)
          return { ...todo, completed: !todo.completed }
        return todo
      }
    )
  ),
  on(deleteCompletedTodos, (state) =>
    state.filter(
      todo => !todo.completed
    ))
)

export {
  todoReducer
}