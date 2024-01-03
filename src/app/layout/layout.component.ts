// layout.component.ts

import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchService } from '../services/search.service';
import { NotificationService } from '../services/notification.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [NotificationService, CardService]
})
export class LayoutComponent {
  constructor(
    private searchService: SearchService,
    public notificationService: NotificationService,
    public cardService: CardService,
    private cdr: ChangeDetectorRef
  ) {}

  updateSearchQuery(event: any) {
    const query = event.target.value;
    this.searchService.updateSearchQuery(query);
    this.cdr.detectChanges(); // Detect changes explicitly
  }

  addToCard(product: any) {
    this.cardService.addToCard(product);
    this.cdr.detectChanges(); // Trigger change detection
  }

  removeFromCard(product: any) {
    this.cardService.removeFromCard(product);
    this.cdr.detectChanges(); // Trigger change detection
  }
}
