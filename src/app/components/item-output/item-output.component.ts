import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss']
})
export class ItemOutputComponent {
  @Output() addNewItemEvent = new EventEmitter<string>()
  addNewItem = (item: string) => {
    this.addNewItemEvent.emit(item)
  }
}
