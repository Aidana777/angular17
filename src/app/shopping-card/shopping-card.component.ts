import { Component } from '@angular/core';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [ CommonModule],
  styleUrls: ['./shopping-card.component.css'],
  templateUrl: './shopping-card.component.html',
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
    this.cartItems = this.cartService.getItemsWithQuantity().slice();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getItemsWithQuantity().slice();
  }

  calculateTotal() {
    return this.cartService.calculateTotal();
  }

  continueShopping() {
    this.router.navigate(['/']);
  }
}
