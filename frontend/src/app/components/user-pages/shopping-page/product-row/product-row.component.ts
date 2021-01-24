import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemStructure } from 'src/app/models/itemStructure';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
})
export class ProductRowComponent implements OnInit {
  @Input() item: ItemStructure;
  @Output()
  deleteItem: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  checkItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  check(): void {
    this.checkItem.emit(this.item.id);
  }

  delete(): void {
    this.deleteItem.emit(this.item.id);
  }
}
