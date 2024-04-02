import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
})
export class ShoppingCardComponent implements OnInit {
  cartItems: any[] = [];
  cartItemCount: number = 0;

  constructor(private cartService: CardService, private router: Router) {}

  ngOnInit() {
    this.updateCartData();
  }

  updateCartData() {
    this.cartItemCount = this.cartService.getItemCount();
  }

  increaseQuantity(item: any) {
    this.cartService.addToCard(item);
    this.updateCartData();
  }

  decreaseQuantity(item: any) {
    this.cartService.removeFromCard(item);
    this.updateCartData();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
    this.updateCartData();
  }

  calculateTotal() {
    return this.cartService.calculateTotal();
  }

  continueShopping() {
    this.router.navigate(['/']);
  }
}
