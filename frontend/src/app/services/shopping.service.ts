import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemStructure } from '../models/itemStructure';
import { FlatsService } from './flats.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { env } from 'process';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private flatId: number;
  private _items: BehaviorSubject<ItemStructure[]> = new BehaviorSubject([]);
  public items: Observable<ItemStructure[]> = this._items.asObservable();

  constructor(private http: HttpClient, private flatsService: FlatsService) {
    flatsService.currentFlat.subscribe((flat) => {
      if (!flat) {
        return;
      }
      this.flatId = flat.id;
      this.http
        .get<ItemStructure[]>(
          `${environment.baseUrl}/shopping-list/${flat.id}/items`
        )
        .subscribe((items) => this._items.next(items));
    });
  }

  addItem(name: string) {
    this.http
      .post<ItemStructure>(
        `${environment.baseUrl}/shopping-list/${this.flatId}`,
        { name, bought: false }
      )
      .subscribe((item) => {
        this._items.next([...this._items.value, item]);
      });
  }

  deleteItem(itemId: number) {
    this.http
      .delete(`${environment.baseUrl}/shopping-list/items/${itemId}`)
      .subscribe((res) => {
        this._items.next(
          this._items.value.filter((item) => item.id !== itemId)
        );
      });
  }

  checkItem(itemId: number) {
    this.http
      .patch<ItemStructure>(
        `${environment.baseUrl}/shopping-list/items/${itemId}`,
        {
          bought: true,
        }
      )
      .subscribe((updatedItem) => {
        const items = this._items.value;
        const index = items.findIndex((item) => item.id === itemId);
        items[index] = updatedItem;

        this._items.next(items);
      });
  }
}
