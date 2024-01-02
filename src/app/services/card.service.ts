// card.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private items: any[] = [];



  addToCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  // layout
  removeFromCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;
    }
  }

  removeItem(product: any) {
    this.items = this.items.filter((item) => item.id !== product.id);
  }

  getItemsWithQuantity() {
    return this.items;
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.items = [];
  }
}
