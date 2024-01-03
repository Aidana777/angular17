// card.service.ts

import { Injectable, ApplicationRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private items: any[] = [];

  constructor(private appRef: ApplicationRef) {}

  addToCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    // Trigger change detection after modifying the card
    this.appRef.tick();
  }

  removeFromCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;

      // Trigger change detection after modifying the card
      this.appRef.tick();
    }
  }

  removeItem(product: any) {
    this.items = this.items.filter((item) => item.id !== product.id);

    // Trigger change detection after modifying the card
    this.appRef.tick();
  }

  getItemsWithQuantity() {
    return this.items;
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];

    // Trigger change detection after clearing the cart
    this.appRef.tick();
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
}
