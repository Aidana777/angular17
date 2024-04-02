import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private items: any[] = [];
  cartUpdated = new EventEmitter<void>();

  addToCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    // Emit an event to notify subscribers that the cart has been updated
    this.cartUpdated.emit();
  }

  removeFromCard(product: any) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem && existingItem.quantity > 0) {
      existingItem.quantity--;
    }

    // Emit an event to notify subscribers that the cart has been updated
    this.cartUpdated.emit();
  }

  removeItem(product: any) {
    this.items = this.items.filter((item) => item.id !== product.id);

    // Emit an event to notify subscribers that the cart has been updated
    this.cartUpdated.emit();
  }

  getItemCount(): number {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
