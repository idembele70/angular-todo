import { createAction, props } from "@ngrx/store"
import { IId, ITodo } from "src/app/models"

const addTodo = createAction("[TodoRow] AddTodo", props<ITodo>())
const deleteTodo = createAction("[TodoRow] DeleteTodo", props<IId>())
const toggleCompleted = createAction("[TodoRow] ToggleCompleted", props<IId>())
const deleteCompletedTodos = createAction("[TodoFooter] DeleteCompletedTodos")

export {
  addTodo,
  deleteTodo,
  toggleCompleted,
  deleteCompletedTodos
}