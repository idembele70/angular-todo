import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss']
})
export class ItemOutputComponent {
  @Output() itemEmitter = new EventEmitter<string>()
  handleAddItem = (item: string) => {
    this.itemEmitter.emit(item)
  }
}
