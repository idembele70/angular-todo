import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent {
  @Input() items: string[] = []
  @Output() itemNameEmitter = new EventEmitter<string>()
  handleDelete = (itemName: string) => {
    this.itemNameEmitter.emit(itemName)
  }

}
