import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  items = ["Television", "PC", "Laptop", "Xbox"]
  onAddItem = (item: string) => {
    this.items.push(item)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
