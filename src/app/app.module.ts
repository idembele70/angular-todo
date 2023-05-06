import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemOutputComponent } from './components/item-output/item-output.component';
import { ItemContainerComponent } from './item-container/item-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOutputComponent,
    ItemContainerComponent,
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
