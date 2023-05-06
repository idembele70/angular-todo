import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnChanges {
  @Input() items: string[] = []

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes")
  }
}
