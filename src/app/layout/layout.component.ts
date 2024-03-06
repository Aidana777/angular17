import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchService } from '../services/search.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [CardService]
})
export class LayoutComponent {
  searchResults: any[] = []; // Добавляем свойство searchResults

  constructor(
    private searchService: SearchService,
    public cardService: CardService,
    private cdr: ChangeDetectorRef
  ) {}
  

  updateSearchQuery(event: any) {
    const query = event.target.value;
    this.searchResults = this.searchService.filterProductsByQuery(this.cardService.products, query);
  }
}


