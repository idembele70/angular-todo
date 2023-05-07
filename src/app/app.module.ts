import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputContainerComponent } from './components/input-container/input-container.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputContainerComponent,
    TodosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
