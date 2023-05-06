import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = ["Television", "PC", "Laptop", "Xbox"]
  onAddItem = (item: string) => {
    this.items.push(item)
  }
  onDeleteItem = (itemName: string) => {
    const newItem = this.items.filter(
      item => item !== itemName
    )
    this.items = newItem
  }
}
