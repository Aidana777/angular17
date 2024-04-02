import { Component, OnInit,OnDestroy } from '@angular/core';
import { CardService } from '../services/card.service';
import { SearchService } from '../services/search.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit, OnDestroy {
  cartItemCount: number = 0;
  private cartSubscription!: Subscription

  constructor(private cardService: CardService, private searchService: SearchService) { }

  ngOnInit() {
    this.updateCartItemCount();

    // Subscribe to cartUpdated event to listen for changes
    this.cartSubscription = this.cardService.cartUpdated.subscribe(() => {
      this.updateCartItemCount();
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to prevent memory leaks
    this.cartSubscription.unsubscribe();
  }

  updateCartItemCount() {
    this.cartItemCount = this.cardService.getItemCount();
  }

  updateSearchQuery(event: any) {
    const query = event.target.value;
    this.searchService.updateSearchQuery(query);
  }
}
