// shopping-card.component.ts
import { Component } from '@angular/core';
import { CardService } from '../services/card.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  providers: [CurrencyPipe],
})
export class ShoppingCardComponent {
  cartItems: any[] = [];

  constructor(private cartService: CardService, private router: Router) {
    this.cartItems = cartService.getItemsWithQuantity();
  }

  increaseQuantity(item: any) {
    this.cartService.addToCard(item);
  }

  decreaseQuantity(item: any) {
    this.cartService.removeFromCard(item);
    this.cartItems = this.cartService.getItemsWithQuantity().slice(); // Update cartItems with a new reference
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getItemsWithQuantity().slice(); // Update cartItems with a new reference
  }

  calculateTotal() {
    return this.cartService.calculateTotal();
  }

  continueShopping() {

    this.router.navigate(['/']);
  }
}
