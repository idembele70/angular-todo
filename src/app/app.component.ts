import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = ["Television", "PC", "Laptop", "Xbox"]

  onAddNewItem = (item: string) => {
    this.items.push(item)
  }
}
