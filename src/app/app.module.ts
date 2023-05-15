import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputContainerComponent } from './components/input-container/input-container.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './ngrx/reducers/todo.reducer';
import { TodoRowComponent } from './components/todo-row/todo-row.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InputContainerComponent,
    TodosListComponent,
    TodoRowComponent,
    TodoFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      todos: todoReducer
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
