// layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchService } from '../services/search.service';
import { NotificationService } from '../services/notification.service';  
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [NotificationService] 
})
export class LayoutComponent {
  constructor(
    private searchService: SearchService,
    public notificationService: NotificationService 
  ) {}

  updateSearchQuery(event: any) {
    const query = event.target.value;
    this.searchService.updateSearchQuery(query);
  }

  openCartAlert() {
    this.notificationService.showNotification('Товар добавлен в корзину');
  }
}
