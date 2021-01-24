import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemStructure } from 'src/app/models/itemStructure';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css'],
})
export class ShoppingPageComponent implements OnInit {
  items$: Observable<ItemStructure[]>;
  itemName: string;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.items$ = this.shoppingService.items;
  }

  addItem(): void {
    this.shoppingService.addItem(this.itemName);
    this.itemName = '';
  }

  onDeleteItem(id: number): void {
    this.shoppingService.deleteItem(id);
  }

  onCheckItem(id: number): void {
    this.shoppingService.checkItem(id);
  }
}
