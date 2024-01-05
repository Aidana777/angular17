// card.service.ts

import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private items: any[] = [];
  totalQuantity: number = 0;

  constructor(private zone: NgZone) {}

  addToCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.updateTotalQuantity();
  }

  removeFromCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;

      this.updateTotalQuantity();
    }
  }

  removeItem(product: any) {
    this.items = this.items.filter((item) => item.id !== product.id);

    this.updateTotalQuantity();
  }

  getItemsWithQuantity() {
    return this.items;
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];

    this.updateTotalQuantity();
  }

  private updateTotalQuantity() {
    this.totalQuantity = this.items.reduce((total, item) => total + item.quantity, 0);
    this.zone.run(() => {
      // Ensure the change detection runs inside Angular zone
    });
  }


  getTotalQuantity() {
    return this.totalQuantity;
  }
}
